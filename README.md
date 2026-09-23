# Maya Chen portfolio

A fast, static Jekyll portfolio for GitHub Pages. The included profile is fictional sample content so you can replace it with your own information.

## Structure

- `index.md`, `about.md`, `work.md`, `contact.md` — page content in Markdown
- `_layouts/` — reusable page and home layouts
- `_includes/` — shared head, header, and footer partials
- `assets/css/style.css` — all visual styling
- `assets/js/site.js` — the small light/dark theme toggle
- `_config.yml` — GitHub Pages and site metadata

## Update the site

1. Replace the sample name, copy, links, and email in the Markdown pages and shared includes.
2. Update `url` and `repository` in `_config.yml` with your GitHub username and repository.
3. Replace `assets/favicon.svg` if you want a different mark.
4. Commit to `main` and configure GitHub Pages to publish from `main` and `/ (root)`.

The site intentionally has no backend, database, contact form processor, blog, analytics, or third-party tracking.

## Preview locally

Install Ruby and Bundler, then add the GitHub Pages dependency:

```sh
gem install bundler
bundle add github-pages
bundle exec jekyll serve --livereload
```

Open `http://localhost:4000`. The included `baseurl: ""` keeps links correct for a GitHub user site such as `mayachen.github.io`.

## Lighthouse

With the local site running, use Chrome DevTools Lighthouse on the homepage at both a narrow mobile viewport (375px) and a desktop viewport (1280px). The site is designed for 90+ Performance, Accessibility, Best Practices, and SEO: it uses semantic landmarks, visible focus states, responsive CSS, descriptive metadata, a sitemap, and no heavy runtime dependencies.

## Assumptions

- `mayachen` is a fictional GitHub username used to make the sample site publish-ready.
- Maya Chen, the projects, dates, social links, and email address are fictional placeholders.
- A public placeholder `mailto:` is included only to demonstrate the contact experience; replace or remove it before publishing.