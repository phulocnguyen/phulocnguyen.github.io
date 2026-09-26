# Phu Loc Nguyen — academic portfolio

A static portfolio adapted from [Minh Tran’s template](https://github.com/trqminh/trqminh.github.io), with monospace typography, light/dark themes, and a responsive layout. No build step or package installation is required.

## Preview

Run `python3 -m http.server 8000` from this directory and open http://localhost:8000. You can also open `index.html` directly; the content and navigation work without JavaScript. Clipboard copying and analytics require an HTTP server (clipboard access requires localhost or HTTPS).

## Editing

- `index.html`: biography, professional links, selected publications, and news.
- `publications.html`: publications by year/status, including expandable BibTeX citations.
- `education.html`: education history.
- `assets/css/main.css`: shared template styles and responsive adjustments.
- `assets/js/theme.js`: initial theme, loaded before rendering.
- `assets/js/main.js`: theme control, citation copying, and existing analytics integration.
- `assets/js/config.json`: Google Analytics measurement ID.
- `assets/documents/imgs/profile_picture.jpg`: profile photo.

Publications are ordinary HTML for accessibility and availability without JavaScript. When updating a selected publication, update it on both the home and research pages. Existing publication statuses, author lists, and citation metadata were retained during migration.

Deploy the repository root to GitHub Pages as a static site. No framework configuration is needed.

## Attribution

The new layout is adapted from trqminh/trqminh.github.io; its MIT notice is retained in `LICENSE-template-MIT` (Copyright 2025 Yuhui Zhang). The previous portfolio’s `LICENSE-CC-BY-SA-4.0` remains in the repository. Legacy language/theme assets are retained but are no longer loaded by these pages.
