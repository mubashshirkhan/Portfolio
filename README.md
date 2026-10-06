# Mubashshir Khan Portfolio

Personal portfolio for Mubashshir Khan Azam Khan, built with Next.js, TypeScript, and CSS.

## Requirements

- Node.js 20 or newer
- npm
- A GitHub personal access token with the minimum permissions needed to read contribution data

## Local development

```bash
npm install
Copy-Item .env.example .env.local
npm run dev
```

Set these values in `.env.local`:

```text
GITHUB_USERNAME=mubashshirkhan
GITHUB_TOKEN=your-server-side-token
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

`GITHUB_TOKEN` is used only by the server-side contribution API. Never prefix it with `NEXT_PUBLIC_`, commit it, or paste it into client code.

## Production checks

```bash
npm run lint
npm run build
npm start
```

The contribution graph supports exactly 2025 and 2026, with 2026 selected initially.

## Deploy to Vercel

1. Push this repository to GitHub.
2. Import the repository at [vercel.com/new](https://vercel.com/new).
3. Leave the framework preset as **Next.js** and keep the default build command.
4. Add these Vercel environment variables for Production, Preview, and Development as needed:

   ```text
   GITHUB_USERNAME=mubashshirkhan
   GITHUB_TOKEN=your-server-side-token
   NEXT_PUBLIC_SITE_URL=https://www.mubashshir.me
   ```

5. Deploy and test:

   ```text
   https://www.mubashshir.me/
   https://www.mubashshir.me/api/github/contributions?year=2026
   ```

6. Add your custom domain in **Vercel → Project → Settings → Domains**.
7. Copy the DNS records Vercel displays into **Namecheap → Domain List → Manage → Advanced DNS**.
8. Wait for DNS verification. Vercel provisions HTTPS automatically; do not expose or upload the Namecheap SSL private key to the repository.

For the root domain, Vercel commonly requests an `A` record for `@`. For `www`, it commonly requests a `CNAME`. Use the exact values shown in your Vercel project because they can change.

## Security checklist

- `.env.local` is ignored by Git.
- `GITHUB_TOKEN` is never sent to the browser.
- The contribution API returns sanitized data only.
- Only 2025 and 2026 are accepted by the contribution API.
- Do not commit credentials, certificates, private keys, or `.env.local`.
