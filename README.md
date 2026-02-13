# Satish Prasad – Portfolio

Enterprise-grade personal portfolio for Satish Prasad, Senior Java Backend Engineer and Cloud & Microservices Architect. Built with React, Material UI, and Framer Motion to showcase large-scale backend engineering leadership.

## Features

- Responsive, mobile-first layout with light/dark theme toggle and persistence
- Hero, About, Skills, Experience timeline, Project highlights, Certifications, Profiles, and Contact form sections
- Resume-driven content (no placeholders) with downloadable PDF at `public/Satish_Prasad_Resume.pdf`
- Animations via Framer Motion with accessibility-friendly reveal timing
- Structured data layer in `src/data/profile.ts` for easy maintenance
- Contact form using `react-hook-form` + `yup` validation and explicit success/error states

## Tech Stack

- React 19 + Vite 7 (TypeScript)
- Material UI 7 (`@mui/material`, `@mui/icons-material`, `@mui/lab`)
- Framer Motion 12 for animations
- React Hook Form 7 with Yup schema validation

## Prerequisites

- **Node.js 20.19+ or 22.12+** (Vite 7 requires this runtime)
- npm 10+ (bundled with the Node.js versions above)

> ℹ️ The development environment used in this workspace runs Node 18.17.1, which cannot build the project. Upgrade locally before running `npm run build` or deploying.

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Launch the dev server
npm run dev
```

- The app runs at `http://localhost:5173` by default.
- Hot Module Replacement (HMR) is enabled for rapid iteration.

## Production Build & Preview

```bash
# Build the production bundle (requires Node ≥ 20.19)
npm run build

# Optionally preview the built site
npm run preview
```

The build outputs static assets to `dist/`, which can be deployed to any static hosting provider (e.g., Netlify, Vercel, AWS S3 + CloudFront).

## Deploy on Render

1. **Push your repo to GitHub** (or GitLab/Bitbucket).
2. **Sign in to [Render](https://render.com)** and click **New +** → **Static Site**.
3. **Connect your repository** and select the portfolio repo.
4. Configure the static site:
   - **Name:** `satish-prasad-portfolio` (or your preferred name)
   - **Build Command:** `npm install && npm run build`
   - **Publish Directory:** `dist`
   - **Node Version:** `20` (or higher)
5. Click **Create Static Site**. Render will build and deploy; future pushes to the main branch trigger automatic deploys.
6. Your site will be live at `https://<your-app-name>.onrender.com`. Add a custom domain in site settings if desired.

> The project includes a `render.yaml` blueprint for automatic configuration.

## Deployment Notes

1. Ensure the runtime environment uses Node ≥ 20.19 before running `npm run build`.
2. Upload the `dist/` folder to your hosting platform of choice.
3. Material UI automatically handles vendor prefixing; no additional post-processing is required.
4. Keep `public/Satish_Prasad_Resume.pdf` in sync with the latest resume for the “Download Resume” CTA.

## Project Structure

```
src/
  components/
    common/         # Shared UI primitives (animated cards, section wrappers, timeline, etc.)
    sections/       # Hero, About, Skills, Experience, Projects, Certifications, Profiles, Contact
    Footer.tsx
    Header.tsx
  data/
    profile.ts      # Centralized resume-derived content
  theme/
    index.tsx       # MUI theme configuration with color mode context
  App.tsx           # Assembles sections + layout
  main.tsx          # Entrypoint wiring theme provider and React root
public/
  Satish_Prasad_Resume.pdf
```

## Customization

- Update resume content via `src/data/profile.ts`.
- Adjust theme palettes and typography in `src/theme/index.tsx`.
- Modify animations through `src/components/common/motion.ts`.
- Add or remove sections by editing the exports in `src/components/sections/index.ts` and adjusting `App.tsx`.

## Linting

```bash
npm run lint
```

The default ESLint setup from Vite is included. Extend the configuration if you need TypeScript-aware lint rules across additional directories.

---

Crafted to present Satish Prasad’s enterprise engineering portfolio with the same rigor applied to production microservices. Upgrade Node, install dependencies, and you’re ready to ship.
