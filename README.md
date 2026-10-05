# Mubashshir Khan Portfolio

Personal portfolio for Mubashshir Khan Azam Khan, built with Next.js, TypeScript, and CSS.

## Development

```bash
npm install
npm run dev
```

Copy `.env.example` to `.env.local` and provide a server-side GitHub token to enable the real contribution graph. The token is never exposed to the browser.

The contribution selector intentionally supports only 2025 and 2026, with 2026 selected by default.

## Production

```bash
npm run lint
npm run build
npm start
```

Deploy by connecting the repository to Vercel and setting `GITHUB_USERNAME` and `GITHUB_TOKEN` as server-side environment variables.
