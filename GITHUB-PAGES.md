# GitHub Pages deployment

This is the existing Astro portfolio. Its content and CV are retained.

## Enable publishing

In this repository's **Settings > Pages**, select **GitHub Actions** as the publishing source. The repository can remain private with an eligible paid GitHub plan. GitHub Free requires a public repository; review the repository before changing visibility.

After the deployment configuration is committed to `main`, the **Deploy portfolio to GitHub Pages** workflow installs the locked dependencies, runs Astro's type checks and production build, and deploys only `dist/`.

If Pages is enabled after the initial workflow run, rerun the workflow from the Actions tab using **Run workflow**.

The expected URL is `https://fmonitap.github.io/FPatino_Portfolio/`. Confirm the actual published URL and successful deployment in Settings > Pages or the workflow's deployment job.

## Updating the portfolio

Edit `src/data/portfolio.ts` for personal information. Commit changes to `main` to publish an update automatically.

The Astro configuration includes the repository base path. Use `siteUrl()` from `src/utils/urls.ts` for root-relative page and public asset URLs so navigation, images and the CV work under that path. External links, email links and fragment links pass through unchanged.

The contact draft form downloads a text file; it does not deliver messages. The direct email link remains available.

## Local checks

```sh
npm ci
npm run build
npm run preview
```

In the preview, open `/FPatino_Portfolio/`.

References: https://v5.docs.astro.build/en/guides/deploy/github/ and https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
