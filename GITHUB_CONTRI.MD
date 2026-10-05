# GitHub Contribution Graph — Complete Implementation

Implement a production-ready GitHub Contribution Graph in my portfolio.

This is a NEW functionality request.

IMPORTANT:
- Do not redesign the entire portfolio.
- Do not modify unrelated sections.
- Do not change my existing portfolio content.
- Do not create fake, random, hardcoded, or mock contribution data.
- Use REAL GitHub contribution data.
- Inspect the existing project before making changes.
- Reuse the existing Next.js, TypeScript, Tailwind CSS, theme, typography, spacing, and design system wherever possible.

---

# 1. GitHub Account

GitHub username:

mubashshirkhan

Environment variables already exist in `.env.local`:

GITHUB_USERNAME=mubashshirkhan
GITHUB_TOKEN=...

IMPORTANT:

Never ask me to paste the token into source code.

Never display the token.

Never log the token.

Never commit `.env.local`.

The `.env.local` file is already included in `.gitignore`.

---

# 2. Main Objective

Create a GitHub-style contribution heatmap for my portfolio.

The graph must display REAL contribution activity from my GitHub account.

The graph must support exactly two years:

2025
2026

There must be NO other year options.

Do not dynamically generate years.

Do not show:

2024
2023
2022
2021
etc.

Only:

[ 2025 ] [ 2026 ]

---

# 3. Default Year

2026 must be selected by default.

When the page initially loads:

[ 2025 ] [ 2026 ]

2026 should visually appear as the active/selected button.

The graph should immediately load real 2026 GitHub contribution data.

---

# 4. Year Switching

When the user clicks:

2025

load real GitHub contribution data for:

January 1, 2025 → December 31, 2025

When the user clicks:

2026

load real GitHub contribution data for:

January 1, 2026 → December 31, 2026

Do not fake the data.

Do not reuse 2026 data for 2025.

Do not reuse 2025 data for 2026.

Each year must make the appropriate GitHub GraphQL request.

---

# 5. Recommended Architecture

Use this architecture:

Browser
    ↓
Next.js API Route
    ↓
GitHub GraphQL API
    ↓
Real contributionCalendar data
    ↓
Sanitized JSON
    ↓
ContributionGraph React component

The GitHub token must NEVER be sent to the browser.

The client must never directly authenticate against GitHub using the personal access token.

---

# 6. Server-Side API

Create:

app/api/github/contributions/route.ts

If the project uses a different existing App Router structure, inspect it first and follow the existing project architecture.

API endpoint:

/api/github/contributions?year=2026

Example:

/api/github/contributions?year=2025

---

# 7. API Validation

The API route must accept ONLY:

2025
2026

If another year is requested:

/api/github/contributions?year=2024

return a safe 400 response.

Do not make a GitHub request for unsupported years.

Validate the query parameter before calling GitHub.

---

# 8. Environment Variables

Read:

process.env.GITHUB_USERNAME

process.env.GITHUB_TOKEN

Never hardcode:

mubashshirkhan

or the token inside the API implementation if the environment variables already exist.

The username may have a safe fallback if appropriate, but the token should never have a hardcoded fallback.

If GITHUB_TOKEN is missing:

- return a safe server error
- do not expose environment variable names unnecessarily
- do not expose the token
- provide a useful development error message

---

# 9. GitHub GraphQL API

Use GitHub's GraphQL API.

Endpoint:

https://api.github.com/graphql

Use the `contributionsCollection` and `contributionCalendar`.

The query should retrieve the contribution calendar for the requested year.

Retrieve:

- totalContributions
- colors
- months
- weeks
- contributionDays

For every contribution day retrieve:

- date
- contributionCount
- contributionLevel
- color
- weekday

For months retrieve:

- name
- year
- firstDay
- totalWeeks

For weeks retrieve:

- firstDay
- contributionDays

Use the official GitHub GraphQL contribution calendar rather than scraping GitHub's HTML.

---

# 10. GraphQL Query

Use a query conceptually equivalent to:

query Contributions(
  $username: String!,
  $from: DateTime!,
  $to: DateTime!
) {
  user(login: $username) {
    contributionsCollection(from: $from, to: $to) {
      contributionCalendar {
        totalContributions
        colors

        months {
          name
          year
          firstDay
          totalWeeks
        }

        weeks {
          firstDay

          contributionDays {
            date
            contributionCount
            contributionLevel
            color
            weekday
          }
        }
      }
    }
  }
}

Adapt the query to the exact GraphQL schema if necessary.

Do not invent GraphQL fields.

---

# 11. Data Returned From API

Return only the data required by the frontend.

Example structure:

{
  "year": 2026,
  "totalContributions": 123,
  "months": [],
  "weeks": []
}

Do not return:

- GitHub token
- authorization headers
- raw secrets
- unnecessary user information
- unnecessary GraphQL response data

---

# 12. Contribution Graph Component

Create:

src/components/ContributionGraph.tsx

If the project already has an appropriate component directory, inspect and follow the existing structure.

The component should be reusable.

It should receive no secret credentials.

The component should fetch:

/api/github/contributions?year=2026

---

# 13. Graph UI

Create a GitHub-style contribution calendar.

The visual structure should be:

Contribution Graph

[ 2025 ] [ 2026 ]

        Jan       Feb       Mar       Apr ...
Mon     □  ■  □   ■  □  ■   □  ■  □
Tue     ■  □  ■   □  ■  □   ■  □  ■
Wed     □  ■  ■   □  □  ■   ■  □  □
Thu     ■  □  □   ■  ■  □   □  ■  ■
Fri     □  ■  □   □  ■  ■   ■  □  □
Sat     ■  □  ■   ■  □  □   □  ■  ■
Sun     □  ■  □   □  ■  □   ■  □  □

Less □ ■ ■ ■ ■ More

The exact visual design should match the existing portfolio and reference design.

Do not make it look like a generic chart.

---

# 14. Contribution Cells

Each day must be represented by a small square cell.

The cell should visually represent contribution intensity.

Use GitHub's contribution information:

- contributionCount
- contributionLevel
- color

GitHub's GraphQL documentation states that the contribution calendar provides color information where darker colors represent more contributions, and each contribution day includes its count, level, date, and color.

Prefer using the returned contribution level/count to map the portfolio's own theme-aware styles rather than blindly relying on GitHub colors if that conflicts with the portfolio's visual system.

Do NOT generate random colors.

Do NOT generate random contribution levels.

---

# 15. Empty Days

Days with:

0 contributions

must still be rendered.

They should have the lowest/empty contribution intensity.

Do not remove zero-contribution days.

The calendar must preserve the correct weekly structure.

---

# 16. Month Labels

Display month labels above the graph.

Example:

Jan
Feb
Mar
Apr
May
Jun
Jul
Aug
Sep
Oct
Nov
Dec

Position the labels according to the actual contribution calendar data.

Do not hardcode cell positions for individual months.

Use the `months` data returned from GitHub where practical.

---

# 17. Weekday Labels

Display weekday labels similar to GitHub.

Example:

Mon
Wed
Fri

You do not necessarily need to show every weekday label if the reference design does not.

Make sure the graph remains clean and compact.

---

# 18. Total Contributions

Display:

Total contributions

For example:

1,234 contributions

The number must come directly from:

contributionCalendar.totalContributions

Do not calculate a fake value.

If you calculate it client-side for validation, compare it with GitHub's total but prefer GitHub's authoritative total.

---

# 19. Tooltips

Desktop:

When hovering over a contribution cell, show a tooltip.

Example:

September 28, 2026
7 contributions

For zero:

September 29, 2026
No contributions

The tooltip must use the actual date and actual contribution count.

Do not hardcode dates.

---

# 20. Mobile Interaction

Mobile devices do not have normal hover behavior.

Therefore:

- support tap/click interaction
- show the contribution information when a cell is tapped
- allow the user to dismiss the tooltip/popover
- do not depend only on CSS `:hover`

Example:

September 28, 2026
7 contributions

---

# 21. Loading State

While GitHub data is loading:

Display a polished loading state.

Example:

Loading contributions...

Do not show fake contribution cells while loading.

A subtle skeleton is acceptable if it matches the existing design.

---

# 22. Error State

If GitHub API fails:

Display a clean user-facing message.

Example:

Unable to load GitHub contributions right now.

Provide a retry action if appropriate.

Do NOT display:

- access tokens
- raw GraphQL errors
- authorization headers
- internal stack traces
- environment variables

---

# 23. Empty State

If GitHub returns no contribution data:

Display a graceful empty state.

Do not generate fake cells.

---

# 24. Rate Limiting

Handle GitHub API rate-limit errors gracefully.

The UI should not crash.

Show a friendly message such as:

GitHub contribution data is temporarily unavailable.

The server should return an appropriate HTTP status.

---

# 25. Caching

Avoid making unnecessary GitHub API requests.

Use appropriate server-side caching where compatible with the Next.js/Vercel environment.

The selected year should be part of the cache key.

For example:

2025 → cached independently

2026 → cached independently

Do not accidentally serve 2026 data when 2025 is selected.

---

# 26. Year Button Behavior

There must be exactly two buttons:

[ 2025 ] [ 2026 ]

No dropdown.

No dynamic year list.

No "All years".

No "Current year".

No other years.

2026 selected initially.

When 2025 is clicked:

- 2025 becomes active
- 2026 becomes inactive
- graph loads 2025 data

When 2026 is clicked:

- 2026 becomes active
- 2025 becomes inactive
- graph loads 2026 data

Use semantic `<button>` elements.

---

# 27. Active Button Design

Match the existing portfolio design.

Dark theme:

- selected year should be clearly visible
- green accent can be used
- subtle border/background

Light theme:

- selected year should remain clearly visible
- green accent
- subtle border/background

Do not introduce a completely different visual language.

---

# 28. Dark Theme

The contribution graph must work with the existing dark theme.

Requirements:

- dark background
- readable labels
- subtle borders
- green contribution intensity
- selected year clearly visible
- tooltip readable
- accessible contrast

Use the existing theme variables if they exist.

Do not create a second unrelated theme system.

---

# 29. Light Theme

The light theme is important.

Do NOT simply invert the dark theme.

Match the portfolio's existing light visual direction:

- off-white/light background
- dark navy/charcoal text
- muted blue-gray secondary text
- subtle borders
- subtle shadows where appropriate
- green contribution cells
- green active year button/accent

The graph should look intentionally designed for the light theme.

---

# 30. Responsive Design

Desktop:

Display the complete yearly contribution graph comfortably.

Tablet:

Scale spacing appropriately.

Mobile:

Do not shrink cells until they become unreadable.

The contribution graph container may horizontally scroll if necessary.

IMPORTANT:

Only the contribution graph may horizontally scroll.

The entire webpage must NOT horizontally scroll.

Do not create:

body {
  overflow-x: scroll;
}

Do not introduce global horizontal scrolling.

---

# 31. Mobile Graph Container

If the graph is wider than the mobile viewport:

Use an internal container such as:

overflow-x: auto;

The page itself must remain:

width: 100%;

The graph should retain readable cell dimensions.

Do not make cells extremely tiny just to fit the entire year.

---

# 32. Accessibility

Each contribution cell must have an accessible label.

Example:

September 28, 2026: 7 contributions

Zero:

September 29, 2026: no contributions

Use appropriate ARIA attributes where needed.

Year buttons must be keyboard accessible.

Selected year should have an appropriate accessible state such as:

aria-pressed="true"

or an equivalent accessible implementation.

Do not communicate contribution intensity through color alone.

Tooltips should not be the only way to access contribution information.

---

# 33. TypeScript

Use TypeScript types/interfaces.

Create appropriate types for:

ContributionDay

ContributionWeek

ContributionMonth

ContributionCalendar

ContributionApiResponse

Do NOT use:

any

unless absolutely unavoidable.

If `any` is unavoidable, explain why.

---

# 34. Component Architecture

Keep the contribution graph maintainable.

Recommended structure:

src/
├── components/
│   └── ContributionGraph.tsx
│
├── lib/
│   └── github.ts
│
└── app/
    └── api/
        └── github/
            └── contributions/
                └── route.ts

Use the existing project structure if it differs.

Do not create unnecessary files.

A GitHub API helper such as:

src/lib/github.ts

may contain:

- GraphQL request logic
- GitHub response typing
- data transformation

The API route should remain clean.

---

# 35. Security

This is extremely important.

The GitHub token is a secret.

Follow all of these rules:

1. Never expose GITHUB_TOKEN to client-side JavaScript.
2. Never use NEXT_PUBLIC_GITHUB_TOKEN.
3. Never put the token in a React component.
4. Never put the token in browser localStorage.
5. Never put the token in sessionStorage.
6. Never put the token in URL parameters.
7. Never put the token in query strings.
8. Never hardcode the token.
9. Never log the token.
10. Never return the token in an API response.
11. Never commit `.env.local`.
12. Never include the token in README files.
13. Never include the token in screenshots.
14. Never include the token in test fixtures.
15. Never expose the token through client-side environment variables.

The token must only be accessed server-side.

GitHub recommends treating personal access tokens like passwords and choosing minimum required permissions. 

---

# 36. Do Not Change My GitHub Token

Do not:

- create another token
- modify my existing token
- print my token
- ask me to provide my token
- put the token into source code

The token is already configured in `.env.local`.

---

# 37. GitHub Username

Use:

mubashshirkhan

The username should preferably come from:

process.env.GITHUB_USERNAME

---

# 38. Production Compatibility

The implementation must work locally and on Vercel.

Local:

.env.local

Production:

Vercel Environment Variables

Required:

GITHUB_USERNAME

GITHUB_TOKEN

Do not require the token to be bundled into the client.

---

# 39. Vercel

Do not deploy automatically.

First make the feature work locally.

After local testing is successful, tell me:

"GitHub Contribution Graph is ready for Vercel environment variables."

Then I will configure the Vercel variables separately.

---

# 40. Testing Requirements

After implementation test:

### Test 1

Open:

/api/github/contributions?year=2026

Verify:

- HTTP success
- real data
- correct year
- total contributions present
- weeks present
- days present

### Test 2

Open:

/api/github/contributions?year=2025

Verify:

- HTTP success
- real 2025 data
- correct year

### Test 3

Open:

/api/github/contributions?year=2024

Expected:

400 / unsupported year response.

### Test 4

Open the portfolio.

Verify:

2026 is selected by default.

### Test 5

Click:

2025

Verify:

- 2025 becomes active
- graph changes
- data is actually from 2025

### Test 6

Click:

2026

Verify:

- 2026 becomes active
- graph changes back
- data is actually from 2026

### Test 7

Test zero-contribution cells.

### Test 8

Test desktop hover tooltip.

### Test 9

Test mobile tap interaction.

### Test 10

Test dark mode.

### Test 11

Test light mode.

### Test 12

Test mobile screen sizes.

### Test 13

Confirm entire webpage does not horizontally overflow.

### Test 14

Confirm only the graph container may scroll horizontally.

### Test 15

Remove/temporarily rename GITHUB_TOKEN locally and verify a graceful configuration error.

Then restore the environment variable.

---

# 41. Security Verification

Before declaring the feature complete, verify:

The GitHub token does NOT appear in:

- browser source
- client JavaScript bundles
- network request URL
- API response
- React props
- localStorage
- sessionStorage
- console logs
- Git commits

The browser should only communicate with:

/api/github/contributions?year=2025

or:

/api/github/contributions?year=2026

The browser must never directly send the GitHub token.

---

# 42. Dependencies

Before installing any dependency:

Check package.json.

If an existing dependency can solve the requirement, reuse it.

Do not install unnecessary libraries.

If you need a tooltip or date utility library, first check whether the project already contains an appropriate dependency.

Prefer lightweight implementation.

---

# 43. Existing Design Preservation

Before coding:

Inspect:

- existing layout
- globals.css
- Tailwind configuration
- theme implementation
- typography
- spacing
- colors
- existing reusable components
- navbar
- sections
- responsive breakpoints

The contribution graph must look like it belongs to the existing portfolio.

Do not redesign unrelated components.

---

# 44. Reference Design

The contribution section should visually follow the reference portfolio style.

Important characteristics:

- clean
- minimal
- premium
- developer portfolio aesthetic
- subtle borders
- compact GitHub-like cells
- green contribution intensity
- strong typography hierarchy
- responsive
- dark/light theme support

Do not create a generic dashboard.

---

# 45. Data Integrity

The displayed contribution count must come from GitHub.

Do NOT:

- randomly generate values
- use Math.random()
- create demo data
- hardcode contribution counts
- hardcode cell colors
- create fake activity
- create fake contribution history

The graph must reflect my real GitHub activity.

---

# 46. Current-Year Handling

2026 is the current year.

GitHub may not have contribution data for future dates in 2026.

Do not fill future dates with fake data.

Only display the data GitHub provides.

For future days, show them as having no contribution activity if GitHub's calendar response represents them that way.

Do not invent future activity.

---

# 47. API Error Handling

Handle:

- invalid year
- missing username
- missing token
- GitHub user not found
- GraphQL errors
- rate limit
- network failure
- malformed response
- unexpected response structure

Do not crash the application.

Return a clean error response.

---

# 48. Code Quality

Use:

- clean TypeScript
- small reusable functions
- meaningful names
- no unnecessary duplication
- no giant component if avoidable
- no unnecessary dependencies
- comments only where useful

Follow the existing project's coding style.

---

# 49. Final Verification

Before finishing:

Run:

npm run lint

if available.

Run:

npm run build

Fix all errors.

Run the development server and manually test the graph.

Verify both years.

Verify mobile.

Verify dark mode.

Verify light mode.

Verify tooltips.

Verify loading/error states.

Verify security.

---

# 50. Final Response From You

After implementation, do NOT just say:

"Done."

Give me a concise implementation report containing:

1. Files created
2. Files modified
3. API endpoint
4. GraphQL approach
5. How 2025 works
6. How 2026 works
7. Security measures
8. How to test locally
9. Any dependencies added
10. Any issues remaining

Also explicitly confirm:

"Only 2025 and 2026 are available in the year selector."

And:

"The GitHub token remains server-side."

---

# FINAL NON-NEGOTIABLE REQUIREMENTS

REAL DATA ONLY.

ONLY TWO YEARS:

2025
2026

2026 selected by default.

NO other year buttons.

NO dropdown.

NO fake data.

NO random data.

NO hardcoded contribution cells.

NO GitHub token in client code.

NO NEXT_PUBLIC_GITHUB_TOKEN.

NO token in API response.

NO token in Git history.

NO unrelated portfolio redesign.

Must work with dark and light themes.

Must work on mobile.

Must not cause global horizontal overflow.

Must work locally.

Must be compatible with Vercel.

Use GitHub GraphQL contributionCalendar.