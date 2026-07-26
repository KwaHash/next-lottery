# ミリオンゲート (Million Gate)

A members-only web service that sells **LOTO 6 number predictions** to Japanese subscribers. Members buy site points, spend them on a prediction plan on draw day, and receive 20 generated number combinations to play.

---

## How it works

```
Sign up  →  Buy points  →  Pick a plan on draw day  →  Spend points  →  Receive 20 number sets
```

1. A visitor who isn't logged in only ever sees the **non-member landing page** (`/non-member`) — sales copy, winning results, testimonials and FAQ.
2. After registering and logging in, the member lands on the plan list with the three LOTO 6 tiers.
3. On a draw day, the plan page exposes a link to *today's* information. Tapping it opens the purchase screen showing the point cost and the member's balance.
4. Confirming the purchase deducts points, generates the combinations, stores them, and redirects to a private result page.
5. The result page is permanently tied to that member, that plan and that date — it can only ever be re-opened by its owner, on the same day.

---

## Features

### Three prediction tiers

| Plan | Route | Cost (points) |
|------|-------|---------------|
| **BLACK** | `/plan/black` | `NEXT_PUBLIC_BLACK_POINTS` (6,000) |
| **GOLD** | `/plan/gold` | `NEXT_PUBLIC_GOLD_POINTS` (1,000) |
| **SILVER** | `/plan/silver` | `NEXT_PUBLIC_SILVER_POINTS` (300) |

Each tier has its own branded landing page, its own price, and its own purchase screen. Prices are environment-driven, so they can be repriced without a code change.

### Draw-day and cut-off gating

Sales are only open on LOTO 6 draw days (Monday / Thursday). On any other day the plan page shows "今日は販売中情報ではありません。" instead of a purchase link.

A hard **18:00 cut-off** applies. After that, the purchase link redirects to a sold-out page (`/plan/timeout`) rather than the purchase screen — the product is framed as a limited daily allocation, not an always-on generator.

### One purchase per plan, per day

Before rendering the buy link, the plan page asks the server whether the member already has a prediction for that plan today. If so, the link jumps straight to the existing result instead of offering another purchase. This keeps a member from paying twice for the same day's information.

### Ownership-checked results

Opening `/prediction/{plan}/{id}` fetches the stored prediction and verifies three things before displaying anything: the row belongs to the signed-in user, the plan in the URL matches the plan on the row, and the prediction was created today. Any mismatch bounces the visitor back to the plan page. Guessing an ID gets you nothing.

Each result page also carries the mandatory Japanese gambling disclaimers (self-responsibility, 20+ only, no refunds, no liability).

### Points wallet

Points are the only currency in the app — there is no per-purchase checkout flow.

- Balance lives on the user record and starts at 100 for new accounts
- The current balance is always visible in the header, on both desktop and mobile
- The purchase button is disabled with an explanatory message when the balance is short of the plan price
- The top-up page (`/point-purchase`) offers 15 denominations from 50 to 5,000 points, alongside the payment and no-refund policy notices

## Getting started

**Prerequisites:** Node.js 18+ (22.x in production) and a reachable MySQL instance.

```bash
npm install
cp .env.example .env   # then fill in the values below
npm run dev            # http://localhost:3000
```

Create an empty database matching `DB_NAME`; the tables build themselves on the first request.

### Environment variables

```env
# Database
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=lottery

# JWT signing
ACCESS_TOKEN_SECRET=
REFRESH_TOKEN_SECRET=

# Transactional email
SENDGRID_API_KEY=
SENDGRID_EMAIL_ADDRESS=
SENDGRID_EMAIL_NAME=

# Site
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_HOST=http://localhost:3000

# Contact details rendered on the contact page
NEXT_PUBLIC_LINE_URL=
NEXT_PUBLIC_PHONE_NUMBER=
NEXT_PUBLIC_ADDRESS=

# Plan pricing
NEXT_PUBLIC_BLACK_POINTS=6000
NEXT_PUBLIC_GOLD_POINTS=1000
NEXT_PUBLIC_SILVER_POINTS=300
```

### Scripts

| Command | Purpose |
|---------|---------|
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm start` | Serve the production build |
| `npm run lint` | ESLint with `--fix` |
| `npm run format` | Prettier |

---

## Deployment

Pushing to `main` triggers a GitHub Actions workflow that builds the app, ships a tarball to the VPS over SCP, installs production dependencies and restarts the PM2 process — backing up the previous release first. Required secrets and the one-time server setup are documented in [DEPLOYMENT.md](DEPLOYMENT.md); workflow troubleshooting lives in [WORKFLOW.md](WORKFLOW.md).
