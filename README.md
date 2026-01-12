# Grey Chair HVAC

A Vite + React marketing site for HVAC/plumbing/electrical services, with an AI-powered troubleshooting helper backed by Google Gemini.

## Tech stack

- React 19 + TypeScript
- Vite 6
- Google Gemini via `@google/genai`

## Run locally

**Prerequisites:** Node.js (recommended: 18+)

1. Install dependencies:

```bash
npm install
```

2. Create a `.env.local` file (this repo ignores `*.local`) and set your Gemini key:

```bash
GEMINI_API_KEY=your_key_here
```

3. Start the dev server:

```bash
npm run dev
```

The app will be available on `http://localhost:3000` (configured in `vite.config.ts`).

## Environment variables

- `GEMINI_API_KEY`: Used by the client-side troubleshooter (`services/geminiService.ts`).

**Note:** This project currently injects the key into the browser bundle via Vite `define`. For production use, prefer moving Gemini calls to a server/API route so the key is not exposed to end users.

## Scripts

- `npm run dev`: Start Vite dev server
- `npm run build`: Production build to `dist/`
- `npm run preview`: Serve the production build locally

## Deploy

Build with:

```bash
npm run build
```

Deploy the `dist/` directory to your static host (Netlify/Vercel/Cloudflare Pages/S3, etc.). If your host requires it, configure SPA routing to rewrite all routes to `index.html`.
