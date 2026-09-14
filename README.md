Hi! I'm Francis Mondelle Patino and this my portfolio.
# Personal portfolio

A static single-page portfolio built with Astro, TypeScript, Tailwind CSS, and daisyUI components.

## Develop

With Node.js 22.12+ installed:

```sh
npm install
npm run dev
```

Open the local URL printed by Astro (normally http://127.0.0.1:4321).

If using the project-local Windows runtime downloaded during setup, run `./dev.ps1` in PowerShell.

## Personalize

The reference composition puts the hero, four metric slots, three featured case-study cards, and compact experience rows first. Summary, capabilities, skills, education, contact, and full experience/case-study details remain below. All navigation and preview-card links lead to those real sections.

Optional `portrait` and `resume` fields enable a real profile photo and CV download. Until supplied, the portrait uses initials and the CV control is explicitly unavailable. Metric values use an em dash until confirmed. `projectPlaceholders` and employment slots are explicitly marked as placeholders; they do not assert completed projects or employment. Replace these alongside `availability`, `personalMotto`, and other profile content in `portfolio.ts`.

Inter is bundled locally for consistent typography. New decorative image assets and the exact generation prompts are documented in `src/assets/reference-assets.md`.

Edit `src/data/portfolio.ts` for all personal content. The professional positioning reflects a commercial background with a business analytics focus. Bracketed employment, education, and skill entries are unconfirmed placeholders; replace them with verified information. Add an email address to enable email actions. Social and certification links are enabled when their URLs are supplied.

The `caseStudies` array is intentionally empty. Add real work with the exported `CaseStudy` type: `title`, `category`, `status` (Placeholder, In progress, or Completed), `summary`, `businessProblem`, `dataApproach`, `tools` (string array), `keyInsight`, `outcome`, and optional `href`. Cards render each field, including the outcome or recommendation. Leave the array empty to retain the honest empty state; do not publish invented results.

Edit `src/styles/global.css` for colors and spacing. Selective glass surfaces use translucent gradients, blur, fine borders, and soft reflections, with an opaque fallback for browsers without backdrop blur. The theme uses your system preference initially and saves manual changes in local storage. Subtle interaction transitions respect reduced-motion preferences.

The page entry is `src/pages/index.astro`; the original empty root `index.html` has been replaced by Astro's page structure.

## Validate and build

```sh
npm run check
npm run build
npm run preview
```

The production site is generated in `dist/`.
