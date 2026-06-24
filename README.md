# 🌐 CODATA DRUM Website (Digital Representation of Units of Measurement)

This repository houses the modern, high-performance website for the **CODATA Digital Representation of Units of Measurement (DRUM)** Task Group.

The site acts as the primary communication hub for members, scientific unions, and stakeholders working to make units of measurement machine-readable.

---

## 🛠️ Technology Stack

Designed for speed, accessibility, and modern aesthetics:
- **SSG:** [Eleventy (11ty) v3.0](https://www.11ty.dev/)
- **Styling:** [Tailwind CSS v4.0](https://tailwindcss.com/) (using the `@theme` engine)
- **Interactivity:** [Alpine.js](https://alpinejs.dev/) + [Persist Plugin](https://alpinejs.dev/plugins/persist)
- **Deployment:** GitHub Actions + GitHub Pages

---

## 🚀 Getting Started for Developers

### Prerequisites
- Node.js (v20+)
- `npm` or `pnpm`

### Installation & Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/codata/drum-www.git
   cd drum-www
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```
   The local site will be served at `http://localhost:8080/drum-www/` with full Hot Module Replacement (HMR) for both styles and templates.

4. **Build for production:**
   ```bash
   npm run build
   ```

---

## 📂 Project Structure

```bash
├── content/              # Sequential Markdown files for Homepage sections
├── src/
│   ├── _data/            # Structured YAML data (News, Members, Resources, etc.)
│   ├── _includes/        # Layouts (Nunjucks) and templates
│   ├── assets/
│   │   ├── images/       # DRUM logo assets
│   │   └── css/          # Compiled Tailwind CSS (output)
│   └── styles/           # Tailwind source CSS with theme definitions
├── _site/                # Generated static files (git-ignored)
├── eleventy.config.js    # 11ty and Markdown configuration
├── .eleventyignore       # Prevents building raw Markdown docs (like README.md)
└── LICENSE.md            # CC0 Public Domain Dedication
```

---

## 📝 Content Management

The site is built to make it easy to keep content up-to-date by separating site logic from text/data:

| Content Area | File Path | Format |
| :--- | :--- | :--- |
| **Global Titles & UI Texts** | `src/_data/site.yaml` | YAML |
| **Members List** | `src/_data/members.yaml` | YAML |
| **Resources & Tools Registry** | `src/_data/resources.yaml` | YAML |
| **News & Announcements** | `src/_data/news.yaml` | YAML |
| **Upcoming Meetings** | `src/_data/meetings.yaml` | YAML |
| **Homepage Narrative Copy** | `content/` folder | Markdown |

---

## 🎨 Theme & Branding

The site uses a premium, dark-themed charcoal/black aesthetic to align with the official **DRUM** logo.
- Color theme tokens are configured via `@theme` variables in `src/styles/tailwind.css`.
- Light/Dark mode transitions are persistent across user sessions via the Alpine.js `$persist` plugin in LocalStorage.

---

## 📄 License

Dedicated to the public domain under the [Creative Commons CC0 1.0 Universal](LICENSE.md) License. You are free to copy, modify, distribute, and perform the work, even for commercial purposes, without asking permission.
