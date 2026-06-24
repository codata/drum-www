# 📘 DRUM Website Maintenance Guide

Welcome! This guide is designed for non-technical maintainers of the **CODATA Digital Representation of Units of Measurement (DRUM)** website. You don't need to know HTML, CSS, or complex programming to keep the site up to date.

## 🚀 Quick Start: The "Editing Rule"

The website is built so that almost every piece of text is stored in simple **Markdown** (.md) or **YAML** (.yaml) files. 

*   **Markdown (`.md`)**: Best for long text, paragraphs, and articles. It looks almost like plain text.
*   **YAML (`.yaml`)**: Best for structured lists (like news, members, resources, or meetings). It uses simple indentation and label-value pairs.

---

## 📂 Where is the Content?

| Goal | Where to look | File Type |
| :--- | :--- | :--- |
| **Change page titles/intro lead text** | `src/_data/site.yaml` | YAML |
| **Update News & Events** | `src/_data/news.yaml` | YAML |
| **Manage Task Group Membership** | `src/_data/members.yaml` | YAML |
| **Add/Edit Tools & Resources** | `src/_data/resources.yaml` | YAML |
| **Manage Scheduled Meetings** | `src/_data/meetings.yaml` | YAML |
| **Home Page Narrative Content** | `content/` folder | Markdown |

---

## 🤖 Option 1: Using AI Agents (GitHub Copilot) - Recommended

If you have access to **GitHub Copilot** (either on the GitHub website or in VS Code), you can perform updates by simply asking the AI to do the work for you. This is the **most efficient, hands-off way** to handle repetitive updates or complex data files.

> [!NOTE]
> GitHub Copilot requires a [subscription](https://github.com/features/copilot/plans) ($10/month), and is **free for individuals** who contribute to popular open-source projects. 

### How to use it:
1.  **Open the Chat**: Look for the Copilot icon (a small robot head or sparkle) in your side panel or at the bottom of the screen.
2.  **Give an Instruction**: Type what you want to achieve in plain English. For example:
    *   *"Add a new event to news.yaml for the 'DRUM webinar' happening on July 10th, 2026."*
    *   *"Update members.yaml to add Jane Doe from NIST as a new member."*
    *   *"Rephrase the second paragraph of 02-mission.md to be more concise."*
3.  **Review and Apply**: Copilot will show you the exact code changes. You can then click **"Insert"** or **"Apply"** to update the file automatically.

**Why use this?** AI agents are excellent at maintaining perfect YAML formatting (indentation and quotes), so you are much less likely to trigger a build error.

---

## 🛠 Option 2: Editing Directly on GitHub

This is the easiest way to make small changes without installing anything on your computer if you prefer to edit text manually.

1.  **Navigate** to the file you want to change on GitHub.
2.  Click the **Pencil icon** (Edit this file) in the top right.
3.  **Make your changes**. If you are editing a YAML file:
    *   Use spaces (not tabs) for indentation.
    *   Ensure there is a space after each colon (e.g., `name: Value`).
    *   If a text value contains a colon `:` or single quotes, wrap the entire value in double quotes `""`.
4.  **Preview** your changes using the "Preview" tab if available (works for Markdown).
5.  **Commit Changes**:
     *   Scroll to the bottom.
     *   Write a short summary (e.g., "Updated members list").
     *   Choose **"Create a new branch for this commit and start a pull request."** (This is safer than editing the main site directly).
6.  **Pull Request (PR)**: Click "Propose changes." A technical lead will review your change and "Merge" it, which makes it live on the website.

---

## 💻 Option 3: Editing Locally (For Power Users)

If you want to see your changes exactly as they will look before publishing, follow these steps:

### 1. Setup
*   **Install Node.js**: Download and install it from [nodejs.org](https://nodejs.org/).
*   **Git**: Ensure you have Git installed.

### 2. Clone the Repository
Open your terminal (Command Prompt or Terminal app) and run:
```bash
git clone https://github.com/codata/drum-www.git
cd drum-www
```

### 3. Install and Run
Run these commands to install the website tools and start a local preview:
```bash
npm install
npm start
```
The terminal will give you a link (usually `http://localhost:8080/drum-www/`). Open this in your browser. Every time you save a file, the site will refresh automatically!

---

## 📝 How to Edit Files

### Editing Markdown (.md)
Markdown is easy. Use `#` for titles and `*` for bullets.
```markdown
# My New Title
This is a paragraph.

*   This is a bullet point.
*   [This is a link](https://example.com)
```

### Editing YAML (.yaml)
Keep the structure intact. Indentation is very important in YAML. Use exactly 2 spaces for nested elements.
```yaml
name: New Tool
description: Short description here
link: https://link.com
```

> [!WARNING]
> **Colons in values:** If your text contains a colon (e.g. a title like `Nature Commentary: Stop Squandering Data`), you **must** wrap the entire value in double quotes:
> `name: "Nature Commentary: Stop Squandering Data"`

---

## 💡 Pro Tips

*   **AI Assistance**: Leverage **GitHub Copilot** (see Option 1) to automate updates. It can write paragraphs, format lists, and fix spacing issues instantly.
*   **Images**: Put new images in `src/assets/images/`. Refer to them as `/assets/images/filename.png` in your files.
*   **Commits and Branches**: Think of a **Commit** as a "Save Point." Think of a **Branch** as a "Draft." Always work on a draft branch so you don't break the live site!

---

## 🎨 Concrete Examples

### 1. Announcing News & Events
*   **File**: `src/_data/news.yaml`
*   **Action**: To add a news item, paste a new item block at the top of the file:
    ```yaml
    - id: webinar-2026
      date: "2026-07-10"
      type: event
      title: "Ambassador Webinar Series: Digital Metrology"
      summary: "Join the DRUM task group for a virtual discussion on machine-readable units."
      link: https://codata.org/...
      tags:
        - Webinar
        - Interoperability
    ```

### 2. Adding a Task Group Member
*   **File**: `src/_data/members.yaml`
*   **Action**: Find the appropriate role list (e.g. `chairs`, `secretaries`, `members`, or `past`) and add your member:
    ```yaml
    - name: Jane Doe
      affiliation: University of Science
    ```

### 3. Adding a Tool or Reference Resource
*   **File**: `src/_data/resources.yaml`
*   **Action**: Add a new resource item block to the list:
    ```yaml
    - name: Metadata Validator
      description: "A prototype tool to parse unit descriptions: testing alignment."
      link: https://github.com/...
      license: Apache-2.0
      logo: ""
    ```

### 4. Scheduling a Timezone-Aware Meeting
*   **File**: `src/_data/meetings.yaml`
*   **Action**: Add a new meeting item. Set the `utc` date and time in ISO format (using `Z` at the end):
    ```yaml
    - group: AMER
      name: Americas
      utc: "2026-08-12T18:00:00Z"
    ```

### 5. Quick Text Edits on the Home Page
*   **Location**: `content/` folder.
*   **Action**: Each section of the home page is its own file (e.g., `01-hero.md`, `02-mission.md`). Open the file, find the text, and edit it.

---

## 🛡️ Automated Safety Checks (The "Red X")

To prevent accidental formatting errors from breaking the live website, we have an automated **Validation Guard** in place.

### What happens when you propose a change?
1. After you click **"Propose changes,"** a check will run automatically in the background.
2. **If everything is correct**: You will see a green checkmark next to your change. This means it is safe to merge.
3. **If there is an error**: You will see a **Red X**. Don't worry! This is a safety feature, not a failure. 

### How to fix a "Red X":
*   Click on **"Details"** next to the Red X.
*   Look for the **"Verify Build"** step. It will usually tell you exactly which file has the error.
*   Common culprits in YAML are:
    *   `YAMLException: bad indentation...`: You likely used a tab character or incorrect spacing. Use exactly 2 spaces for indents.
    *   `YAMLException: ...`: You used a colon followed by a space (like `: `) in a text description without wrapping the text in double quotes.

---

## ⏪ Rolling Back Changes

If a change was merged and it broke something on the live site, don't panic! GitHub makes it very easy to "undo" a mistake.

### How to Revert a Pull Request:
1.  Go to the **"Pull requests"** tab on GitHub.
2.  Click on the **"Closed"** list to find the update that caused the problem.
3.  Scroll down to the bottom of that specific Pull Request.
4.  You will see a button that says **"Revert"**. Click it.
5.  This will create a *new* Pull Request that exactly reverses your changes.
6.  **Merge** this new Revert PR. The site will automatically rebuild and return to its previous working state within minutes.

---

## 🆘 Need Help?
If the site stops working after an edit, check for:
1.  Missing quotation marks around values with colons or special symbols.
2.  Incorrect spacing or tabs in YAML files.
3.  Misspelled filenames.

If you are stuck, open an **Issue** on the GitHub repository and a technical maintainer will assist you.
