# Sketch Portfolio

A hand-drawn, sketch-style personal portfolio — the kind of site that looks like someone doodled it in a notebook and then made it actually work.

## What it is

One-page React portfolio with a deliberately hand-drawn aesthetic: custom SVG doodle components, gentle motion, and a warm paper-like feel. It covers the essentials — who I am, what I've studied, what I've built, certificates, and how to reach me — without looking like a template.

## Sections

- Hero
- About
- Education
- Projects
- Certificates
- Contact

## Stack

- Vite 6 + React 19
- Tailwind CSS 4 (via the Vite plugin)
- framer-motion for animations
- lucide-react for icons
- ESLint (react-hooks + react-refresh rules)

## Run it locally

```bash
npm install
npm run dev        # dev server with hot reload
npm run lint       # eslint check
npm run build      # production build -> dist/
npm run preview    # preview the production build
```

## CI

GitHub Actions runs lint + build on every push and pull request to `main`. Green means the site compiles and the code passes ESLint — nothing broken sneaks in.

## Deploy

Deploys to Vercel. `vercel.json` handles the SPA rewrite and hardened security headers:

- CSP, HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy
- Immutable caching for `/assets/*` (fingerprinted by Vite)

## Structure

```
src/
  App.jsx, main.jsx, data.js, index.css
  components/   Hero, About, Education, Projects, Certificates, Contact, Navbar, Footer, doodles
public/
  Manoj.jpeg, Resume_Manoj.pdf, favicon.svg
  certificates/ 15 certificate images
```
