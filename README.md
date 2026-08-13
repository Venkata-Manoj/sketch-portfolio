<<<<<<< HEAD
# SketchPortfolio ✏️🎨

An interactive, hand-drawn sketchbook portfolio built with **Vite**, **React 19**, **Tailwind CSS v4**, **Framer Motion**, and **Lucide React**.

Designed for **Ballani Venkata Manoj** with a custom paper texture aesthetic, sketchy hand-drawn borders, tape details, and doodle annotations.

---

## ✨ Features

- **Hand-drawn Sketchbook Aesthetic**: Ruled notebook paper background, taped post-it note accents, sketchy outlines, and interactive doodle elements.
- **Interactive Sections**:
  - **Navbar**: Sticky sketchbook tabs with quick navigation.
  - **Hero**: Sketchbook cover with bio, profile roles, social links, and CTAs.
  - **About**: Hand-drawn skill notebook, bio, domains, and open-to-work locations.
  - **Education**: Interactive timeline of academic qualifications and achievements.
  - **Projects**: Stacked project cards featuring descriptions, tech badges, live demos, and GitHub links.
  - **Certificates**: Showcase of certifications with badge tags and image overlays.
  - **Contact**: Post-it note contact form with client-side email guard and address book.
- **Form Protection & Validation**:
  - Clear user instruction encouraging visitors to enter their own contact email.
  - Client-side validation preventing form submission when entering the owner's email address (`bvmanoj61@gmail.com`).
- **Fully Responsive & Accessible**:
  - Mobile-first responsive layout across all device sizes.
  - Screen reader live regions and keyboard accessible controls.

---

## 🛠️ Tech Stack

- **Framework**: React 19 + Vite 6
- **Styling**: Tailwind CSS v4 + Custom CSS utilities & SVG doodles
- **Animations**: Framer Motion 12
- **Icons**: Lucide React
- **Linting**: ESLint 10 (Flat config)

---

## 📁 Project Structure

```
SketchPortfolio/
├── .github/
│   └── workflows/
│       └── ci.yml          # GitHub Actions CI pipeline
├── public/                  # Public assets, images & certificates
├── src/
│   ├── components/         # Page section components (About, Projects, Contact, etc.)
│   ├── App.jsx             # Main application component & layout
│   ├── data.js             # Portfolio profile & project data
│   ├── index.css           # Global CSS variables & hand-drawn themes
│   └── main.jsx            # Application entry point
├── eslint.config.js        # Flat ESLint config
├── package.json            # Dependencies and npm scripts
├── README.md               # Project documentation
├── vercel.json             # Vercel deployment configuration
└── vite.config.js          # Vite build configuration
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm 9.x or higher

### Installation & Development

```bash
# Install project dependencies
npm install

# Run development server
npm run dev

# Lint code for errors
npm run lint

# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## 👤 Author

**Ballani Venkata Manoj**
- **GitHub**: [@Venkata-Manoj](https://github.com/Venkata-Manoj)
- **LinkedIn**: [venkata-manoj](https://linkedin.com/in/venkata-manoj)
- **Email**: bvmanoj61@gmail.com
=======
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
>>>>>>> 5d09f2b6bb1e0794356efa035a82cc42887f38ff
