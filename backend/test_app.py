import json
import os
import unittest
from io import BytesIO
from unittest.mock import patch

import app as backend_app


class FakeHttpResponse:
    def __init__(self, body: dict):
        self._data = json.dumps(body).encode("utf-8")

    def read(self):
        return self._data

    def __enter__(self):
        return self

    def __exit__(self, exc_type, exc, tb):
        return False


class ContactApiTests(unittest.TestCase):
    def setUp(self):
        backend_app._rate_buckets.clear()
        self.client = backend_app.app.test_client()

    def test_health_reports_brevo_status(self):
        with patch.dict(os.environ, {"BREVO_API_KEY": ""}):
            res = self.client.get("/api/health")
            self.assertEqual(res.status_code, 200)
            self.assertEqual(res.get_json(), {"ok": True, "brevoConfigured": False})

        with patch.dict(os.environ, {"BREVO_API_KEY": "xkeysib-test"}):
            res = self.client.get("/api/health")
            self.assertEqual(res.status_code, 200)
            self.assertEqual(res.get_json(), {"ok": True, "brevoConfigured": True})

    def test_validation_rejects_bad_input(self):
        res = self.client.post("/api/contact", json={"name": "A", "email": "bad", "message": "hi"})
        self.assertEqual(res.status_code, 400)
        self.assertFalse(res.get_json()["ok"])

    def test_honeypot_short_circuits_silently(self):
        with patch("app.urllib.request.urlopen") as mock_open:
            res = self.client.post(
                "/api/contact",
                json={
                    "name": "Spam Bot",
                    "email": "bot@example.com",
                    "message": "Buy links now",
                    "website": "http://spam.example",
                },
            )
            self.assertEqual(res.status_code, 200)
            self.assertTrue(res.get_json()["ok"])
            mock_open.assert_not_called()

    def test_missing_api_key_returns_503(self):
        with patch.dict(os.environ, {"BREVO_API_KEY": ""}):
            res = self.client.post(
                "/api/contact",
                json={
                    "name": "Amina Bello",
                    "email": "amina@company.ng",
                    "organization": "Acme Abuja",
                    "interest": "Audiovisual & Teams Rooms",
                    "message": "We need two Teams Rooms boardrooms fitted in Abuja CBD.",
                },
            )
            self.assertEqual(res.status_code, 503)
            self.assertEqual(res.get_json()["code"], "BREVO_NOT_CONFIGURED")

    def test_successful_send_uses_brevo_sender_and_company_recipient(self):
        captured = {}

        def fake_urlopen(req, timeout=15):
            captured["url"] = req.full_url
            captured["headers"] = {k.lower(): v for k, v in req.header_items()}
            captured["body"] = json.loads(req.data.decode("utf-8"))
            return FakeHttpResponse({"messageId": "<msg-123@brevo>"})

        env = {
            "BREVO_API_KEY": "xkeysib-live-test-key",
            "BREVO_SENDER_EMAIL": "mololuwa.ibrahim@gmail.com",
            "CONTACT_RECIPIENT_EMAIL": "info@mriyacolimited.com.ng",
        }
        with patch.dict(os.environ, env), patch("app.urllib.request.urlopen", side_effect=fake_urlopen):
            res = self.client.post(
                "/api/contact",
                json={
                    "name": "Amina <Bello>",
                    "email": "amina@company.ng",
                    "organization": "FCT Agency",
                    "interest": "Audiovisual & Teams Rooms",
                    "message": "Requesting quote for <Boardroom> & Poly kit.",
                },
            )

        self.assertEqual(res.status_code, 200)
        body = res.get_json()
        self.assertTrue(body["ok"])
        self.assertEqual(body["messageId"], "<msg-123@brevo>")
        self.assertEqual(captured["url"], "https://api.brevo.com/v3/smtp/email")
        self.assertEqual(captured["headers"]["api-key"], "xkeysib-live-test-key")
        self.assertEqual(captured["body"]["sender"]["email"], "mololuwa.ibrahim@gmail.com")
        self.assertEqual(captured["body"]["to"][0]["email"], "info@mriyacolimited.com.ng")
        self.assertEqual(captured["body"]["replyTo"]["email"], "amina@company.ng")
        self.assertIn("Amina &lt;Bello&gt;", captured["body"]["htmlContent"])
        self.assertNotIn("<Boardroom>", captured["body"]["htmlContent"])


if __name__ == "__main__":
    unittest.main()
