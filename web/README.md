# Karen Web (Phase 1)

Minimal Next.js app scaffold for Karen, focusing on an empathetic chat UI with a placeholder backend.

## Local Development

1. Install Node.js (LTS recommended).
2. From the `web/` directory:
   - `cp .env.example .env.local` and add your real keys.
   - `npm install`
   - `npm run dev`
3. Open http://localhost:3000

Environment variables:
- GROQ_API_KEY
- BRAVE_API_KEY
- Optional: GROQ_MODEL, GROQ_BASE_URL, BRAVE_GROUNDING_URL

## Deploy with Vercel

1. Push this repository to GitHub (or create a new one).
2. In Vercel, import the GitHub repo and select the `web/` directory as the project root.
3. Set Environment Variables in Project Settings:
   - GROQ_API_KEY
   - BRAVE_API_KEY
   - GROQ_MODEL (optional)
   - GROQ_BASE_URL (optional)
   - BRAVE_GROUNDING_URL (optional)
4. Deploy. Vercel will auto-detect Next.js and build.

## Notes

- The API route at `app/api/chat/route.ts` returns a reflective placeholder message.
- In the next step, we’ll call Groq (and optionally Brave for grounding) using the env vars above, with streaming responses for a better UX.
