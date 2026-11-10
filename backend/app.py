import html
import json
import os
import re
import time
import urllib.error
import urllib.request
from pathlib import Path
from flask import Flask, jsonify, request, send_from_directory

BASE_DIR = Path(__file__).resolve().parent
DIST_DIR = BASE_DIR.parent / "dist"
BREVO_API_URL = "https://api.brevo.com/v3/smtp/email"
EMAIL_PATTERN = re.compile(r"^[^@\s]+@[^@\s]+\.[^@\s]+$")

# Simple in-memory rate limiter (max 5 submissions per 10 minutes per IP)
RATE_LIMIT_WINDOW_SECONDS = 600
RATE_LIMIT_MAX_REQUESTS = 5
_rate_buckets: dict[str, list[float]] = {}


def load_local_env() -> None:
    """Load key=value pairs from .env files if not already present in os.environ."""
    for env_path in (BASE_DIR / ".env", BASE_DIR.parent / ".env"):
        if not env_path.is_file():
            continue
        for raw_line in env_path.read_text(encoding="utf-8").splitlines():
            line = raw_line.strip()
            if not line or line.startswith("#") or "=" not in line:
                continue
            key, value = line.split("=", 1)
            key = key.strip()
            value = value.strip().strip('"').strip("'")
            if key and key not in os.environ:
                os.environ[key] = value


load_local_env()

app = Flask(
    __name__,
    static_folder=str(DIST_DIR) if DIST_DIR.is_dir() else None,
    static_url_path="",
)


def get_allowed_origin(origin: str | None) -> str:
    configured = os.environ.get("ALLOWED_ORIGINS", "*").strip()
    if configured == "*" or not origin:
        return "*"
    allowed = [item.strip() for item in configured.split(",") if item.strip()]
    return origin if origin in allowed else ""


@app.after_request
def attach_cors_headers(response):
    origin = request.headers.get("Origin")
    allowed = get_allowed_origin(origin)
    if allowed:
        response.headers["Access-Control-Allow-Origin"] = allowed
        if allowed != "*":
            response.headers["Vary"] = "Origin"
        response.headers["Access-Control-Allow-Methods"] = "GET, POST, OPTIONS"
        response.headers["Access-Control-Allow-Headers"] = "Content-Type"
    return response


def is_rate_limited(client_ip: str) -> bool:
    now = time.monotonic()
    cutoff = now - RATE_LIMIT_WINDOW_SECONDS
    recent = [ts for ts in _rate_buckets.get(client_ip, []) if ts > cutoff]
    if len(recent) >= RATE_LIMIT_MAX_REQUESTS:
        _rate_buckets[client_ip] = recent
        return True
    recent.append(now)
    _rate_buckets[client_ip] = recent
    return False


def build_brevo_payload(
    name: str,
    email: str,
    organization: str,
    interest: str,
    message: str,
) -> dict:
    sender_email = os.environ.get(
        "BREVO_SENDER_EMAIL", "mololuwa.ibrahim@gmail.com"
    ).strip()
    sender_name = os.environ.get(
        "BREVO_SENDER_NAME", "Mriya Co Limited Website"
    ).strip()
    recipient_email = os.environ.get(
        "CONTACT_RECIPIENT_EMAIL", "info@mriyacolimited.com.ng"
    ).strip()
    recipient_name = os.environ.get(
        "CONTACT_RECIPIENT_NAME", "Mriya Co Limited"
    ).strip()

    safe_name = html.escape(name)
    safe_email = html.escape(email)
    safe_org = html.escape(organization or "Not provided")
    safe_interest = html.escape(interest)
    safe_message_html = html.escape(message).replace("\n", "<br />")

    html_content = f"""
    <div style="font-family: Arial, Helvetica, sans-serif; color: #0f172a; max-width: 640px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 10px; overflow: hidden;">
      <div style="background: #0f172a; color: #ffffff; padding: 20px 24px;">
        <p style="margin: 0 0 4px; font-size: 11px; letter-spacing: 0.14em; color: #38bdf8; font-weight: 700;">MRIYA CO LIMITED · WEBSITE INQUIRY</p>
        <h2 style="margin: 0; font-size: 20px;">{safe_interest}</h2>
      </div>
      <div style="padding: 24px; background: #ffffff;">
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 18px;">
          <tr>
            <td style="padding: 8px 0; color: #64748b; width: 160px; font-size: 13px; font-weight: 700;">Name</td>
            <td style="padding: 8px 0; font-size: 14px;">{safe_name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #64748b; font-size: 13px; font-weight: 700;">Reply Email</td>
            <td style="padding: 8px 0; font-size: 14px;"><a href="mailto:{safe_email}" style="color: #0284c7;">{safe_email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #64748b; font-size: 13px; font-weight: 700;">Organisation / Phone</td>
            <td style="padding: 8px 0; font-size: 14px;">{safe_org}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #64748b; font-size: 13px; font-weight: 700;">Solution Interest</td>
            <td style="padding: 8px 0; font-size: 14px;">{safe_interest}</td>
          </tr>
        </table>
        <div style="padding: 16px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px;">
          <p style="margin: 0 0 8px; font-size: 12px; font-weight: 700; color: #0284c7; letter-spacing: 0.08em;">PROJECT MESSAGE</p>
          <p style="margin: 0; font-size: 14px; line-height: 1.65; color: #334155;">{safe_message_html}</p>
        </div>
      </div>
      <div style="padding: 14px 24px; background: #f1f5f9; font-size: 12px; color: #64748b;">
        Submitted from mriyacolimited.com.ng · Reply directly to respond to {safe_name} ({safe_email}).
      </div>
    </div>
    """.strip()

    text_content = (
        f"New Website Inquiry — Mriya Co Limited\n"
        f"=====================================\n"
        f"Name: {name}\n"
        f"Email: {email}\n"
        f"Organisation / Phone: {organization or 'Not provided'}\n"
        f"Solution of Interest: {interest}\n\n"
        f"Message:\n{message}\n"
    )

    return {
        "sender": {"name": sender_name, "email": sender_email},
        "to": [{"name": recipient_name, "email": recipient_email}],
        "replyTo": {"name": name, "email": email},
        "subject": f"[Mriya Website] {interest} — {name}",
        "htmlContent": html_content,
        "textContent": text_content,
    }


def send_via_brevo(payload: dict, api_key: str) -> dict:
    req = urllib.request.Request(
        BREVO_API_URL,
        data=json.dumps(payload).encode("utf-8"),
        method="POST",
        headers={
            "accept": "application/json",
            "content-type": "application/json",
            "api-key": api_key,
            "user-agent": "mriya-contact-backend/1.0",
        },
    )
    with urllib.request.urlopen(req, timeout=15) as resp:
        raw = resp.read().decode("utf-8")
        return json.loads(raw) if raw else {}


@app.route("/api/health", methods=["GET"])
def health():
    api_key = os.environ.get("BREVO_API_KEY", "").strip()
    return jsonify(
        {
            "ok": True,
            "brevoConfigured": bool(api_key),
        }
    )


@app.route("/api/contact", methods=["POST", "OPTIONS"])
def submit_contact():
    if request.method == "OPTIONS":
        return ("", 204)

    data = request.get_json(silent=True)
    if not isinstance(data, dict):
        return jsonify({"ok": False, "error": "Invalid JSON request body."}), 400

    # Honeypot spam trap: bots filling the hidden `website` field succeed silently.
    if str(data.get("website", "")).strip():
        return jsonify({"ok": True, "message": "Inquiry received."}), 200

    name = str(data.get("name", "")).strip()
    email = str(data.get("email", "")).strip()
    organization = str(data.get("organization", "")).strip()
    interest = str(data.get("interest", "")).strip() or "General Inquiry"
    message = str(data.get("message", "")).strip()

    if len(name) < 2 or len(name) > 120:
        return (
            jsonify({"ok": False, "error": "Please enter your name (2–120 characters)."}),
            400,
        )
    if not EMAIL_PATTERN.match(email) or len(email) > 200:
        return (
            jsonify({"ok": False, "error": "Please enter a valid email address."}),
            400,
        )
    if len(organization) > 160:
        return (
            jsonify({"ok": False, "error": "Organisation/phone field is too long."}),
            400,
        )
    if len(interest) > 160:
        interest = interest[:160]
    if len(message) < 5 or len(message) > 5000:
        return (
            jsonify(
                {
                    "ok": False,
                    "error": "Please provide a message between 5 and 5000 characters.",
                }
            ),
            400,
        )

    client_ip = (
        request.headers.get("X-Forwarded-For", "").split(",")[0].strip()
        or request.remote_addr
        or "unknown"
    )
    if is_rate_limited(client_ip):
        return (
            jsonify(
                {
                    "ok": False,
                    "error": "Too many inquiries submitted recently. Please wait a few minutes or email us directly.",
                }
            ),
            429,
        )

    api_key = os.environ.get("BREVO_API_KEY", "").strip()
    if not api_key:
        return (
            jsonify(
                {
                    "ok": False,
                    "code": "BREVO_NOT_CONFIGURED",
                    "error": "Email relay is not configured on the server yet.",
                }
            ),
            503,
        )

    payload = build_brevo_payload(name, email, organization, interest, message)
    try:
        brevo_result = send_via_brevo(payload, api_key)
    except urllib.error.HTTPError as exc:
        detail = ""
        try:
            detail = exc.read().decode("utf-8", errors="ignore")
        except Exception:
            detail = ""
        app.logger.error("Brevo API returned HTTP %s: %s", exc.code, detail)
        return (
            jsonify(
                {
                    "ok": False,
                    "error": "Unable to dispatch email right now. Please try again or email us directly.",
                }
            ),
            502,
        )
    except Exception as exc:
        app.logger.error("Brevo API request failed: %s", exc)
        return (
            jsonify(
                {
                    "ok": False,
                    "error": "Network error contacting email service. Please try again or email us directly.",
                }
            ),
            502,
        )

    return jsonify(
        {
            "ok": True,
            "message": "Your message has been delivered to info@mriyacolimited.com.ng.",
            "messageId": brevo_result.get("messageId"),
        }
    )


@app.route("/", defaults={"path": ""})
@app.route("/<path:path>")
def serve_frontend(path: str):
    if path.startswith("api/"):
        return jsonify({"ok": False, "error": "Not found."}), 404
    if not DIST_DIR.is_dir():
        return (
            jsonify(
                {
                    "ok": True,
                    "service": "Mriya Contact API",
                    "note": "Frontend dist/ not built yet. Run `npm run build` or use Vite dev server.",
                }
            ),
            200,
        )
    target = DIST_DIR / path
    if path and target.is_file():
        return send_from_directory(DIST_DIR, path)
    index_file = DIST_DIR / "index.html"
    if index_file.is_file():
        return send_from_directory(DIST_DIR, "index.html")
    return jsonify({"ok": False, "error": "Frontend build missing."}), 404


if __name__ == "__main__":
    port = int(os.environ.get("PORT", "5000"))
    app.run(host="0.0.0.0", port=port)
