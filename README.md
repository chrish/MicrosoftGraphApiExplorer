# Graph Beta Metadata Explorer

Static website and markdown generator for Microsoft Graph beta metadata annotation targets.

## What this generates

- `docs/targets.md`: A nested markdown tree of annotation targets.
- `docs/data/targets.json`: Full target catalog with descriptions and annotation terms.
- `docs/data/summary.json`: Build metadata summary.
- `docs/index.html`: Searchable static explorer (DataTables).

## Usage

1. Install dependencies:

```bash
npm install
```

2. Build from existing `metadata.xml`:

```bash
npm run build
```

3. Fetch fresh metadata and rebuild:

```bash
npm run refresh
```

4. (Optional) Fetch only:

```bash
npm run fetch:metadata
```

## GitHub Pages

A workflow is included in `.github/workflows/pages.yml` to publish the `docs` folder to GitHub Pages.

After pushing to your default branch:

1. Enable Pages in repository settings.
2. Set Source to **GitHub Actions**.
3. The workflow will deploy the site.
