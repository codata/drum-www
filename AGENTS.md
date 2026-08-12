# CODATA DRUM Website Project Rules (AGENTS.md)

This project aims to maintain a modern, high-performance website for the **CODATA Digital Representation of Units of Measurement (DRUM)** task group. The site serves as the primary communication hub for members, scientific unions, and external stakeholders.

## 🎯 Objectives
- **Maintainability:** Content is strictly separated into Markdown files and YAML data structures.
- **Responsiveness:** A fluid mobile, tablet, and desktop layout with a responsive header.
- **Accessibility:** Adherence to WCAG guidelines and contrast compliance.
- **Design Aesthetic:** A premium, dark-themed black/charcoal professional aesthetic using Tailwind v4.0 and glassmorphic navigation.

## 🎨 Branding & Design System
The site uses a Tailwind CSS v4 `@theme` architecture. The color system is tailored to match the DRUM logo:
- **Primary Visual Anchor:** `src/assets/images/drum_logo_150x100.png` (header/footer logo), and `drum_logo_375x250.png` / `drum_logo_750x500.png` for other branding assets.
- **Color Palette:**
  - Dark Mode: Off-black background (`#090d16`), deep slate surface (`#131a2c`), bright silver/white text (`#f8fafc`).
  - Light Mode: Soft gray/slate background (`#f1f5f9`), light slate surface (`#e2e8f0`), deep charcoal text (`#0f172a`).

## 📝 Content Architecture

### Data-Driven files (located in `src/_data/`)
- `site.yaml`: Global UI labels, taglines, email links (`mailto:drum@codata.org`), and footer links.
- `members.yaml`: Flat list of seeded task group members (Chair, Secretary, Active Members, Past Members). No subgroups are modeled.
- `resources.yaml`: Catalogs key toolkits, inventories, and articles (Digital Unit Representation Inventory, UMIS, SI Reference Point, and the Nature commentary).
- `news.yaml` & `sortedNews.js`: YAML structure driven news events and ticker updates.
- `meetings.yaml`: Seeded list of timezone-aware task group meetings.

### Page Routes
- `/` (Home): Compiled from `index.njk` and sequential homepage markdown sections in the `content/` directory.
- `/membership/` (`membership.njk`): Unified flat membership catalog.
- `/resources/` (`resources.njk`): Core tool and document registry.
- `/news-events/` (`news-events.njk`): Full archive of news and ticker announcements.
- `/privacy/` & `/terms/` (`privacy.md`, `terms.md`): Legal compliance.

### Homepage Markdown Sections (located in `content/`)
- `01-hero.md`: Landing hero copy and CTAs (links to the DRUM draft book: `https://codata.github.io/drum-book/`).
- `02-mission.md`: The mission of the DRUM group.
- `03-about.md`: Detailed explanation of what the group is about.
- `04-membership.md`: Teaser for membership with meeting frequencies and links to the membership page.
- `05-resources.md`: Teaser for core tools, linking to the resources page.

## 🛠️ Technical Stack
- **SSG:** Eleventy v3.0 with Nunjucks templates and `HtmlBasePlugin` (for `/drum-www/` routing).
- **Styling:** Tailwind CSS v4.0 + `@tailwindcss/typography` plugin.
- **Interactivity:** Alpine.js v3 + Persist Plugin for local storage UI states.
- **Deployment:** Continuous integration to GitHub Pages on changes to the `main` branch.
