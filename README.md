# Mriya Co Limited Website

Corporate, Pro-AV, IT Infrastructure & Engineering website for **Mriya Co Limited (`RC: 1700889`)**, built with React + Vite and a lightweight Flask contact relay powered by the Brevo Transactional Email API.

## Contact Form & Brevo API Architecture

Because the Brevo API requires a private server-side `api-key` (`xkeysib-...`), the key must never be placed in React frontend code where visitors can inspect it in browser DevTools.

Instead, the React form (`POST /api/contact`) submits to the lightweight Flask backend in `backend/app.py`, which forwards inquiries securely to Brevo:

- **Brevo Sender (`BREVO_SENDER_EMAIL`)**: `mololuwa.ibrahim@gmail.com` (verified sender on Brevo)
- **Website Recipient (`CONTACT_RECIPIENT_EMAIL`)**: `info@mriyacolimited.com.ng`
- **Reply-To**: Automatically set to the visitor's email address so clicking Reply responds directly to them.

## Local Development

### 1. Frontend (React + Vite)

```bash
npm install
npm run dev
```

Vite runs at `http://localhost:5173` and automatically proxies `/api/*` requests to `http://127.0.0.1:5000`.

### 2. Backend (Flask + Brevo)

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r backend/requirements.txt
cp backend/.env.example backend/.env
# Edit backend/.env and set your real BREVO_API_KEY
python backend/app.py
```

### Run Backend Tests

```bash
python3 -m unittest discover -s backend
```

## Production Deployment (Render / Single Web Service)

`backend/app.py` automatically serves the compiled `dist/` frontend alongside `/api/contact` and `/api/health`, so you can host both together as a single service (for example on Render):

- **Build Command:** `npm install && npm run build && pip install -r backend/requirements.txt`
- **Start Command:** `gunicorn --chdir backend app:app`
- **Environment Variables:**
  - `BREVO_API_KEY` = your Brevo API key (`xkeysib-...`)
  - `BREVO_SENDER_EMAIL` = `mololuwa.ibrahim@gmail.com`
  - `CONTACT_RECIPIENT_EMAIL` = `info@mriyacolimited.com.ng`

If you host the frontend separately (e.g. static site / Vercel / GitHub Pages), set `VITE_CONTACT_API_URL=https://your-flask-service.onrender.com` when building the frontend and set `ALLOWED_ORIGINS=https://www.mriyacolimited.com.ng` on the Flask service.
