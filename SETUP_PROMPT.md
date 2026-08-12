# CODATA DRUM Website Project

Build a new website for the **CODATA Digital Representation of Units of Measurement (DRUM)** working group. The site is the primary communication hub for members, scientific communities, and other stakeholders.

Do not start from scratch. Use the existing CDIF website as the implementation reference:

- Local template: `../cdif-www`
- Hosted reference: https://codata.github.io/cdif-www-mock/

Adapt the structure, theme, and content for DRUM instead of copying CDIF verbatim.

## Source Of Truth

Use sources in this priority order when they conflict:

1. Current DRUM website content at https://codata.org/initiatives/task-groups/drum/
2. Draft DRUM book at https://codata.github.io/drum-book/
3. Existing CDIF site structure and implementation patterns
4. Web knowledge / research for supplemental context only

Do not invent facts. If a membership detail, title, or affiliation is uncertain, preserve the uncertainty in the seed data or flag it for later verification instead of silently normalizing it.

## What To Build

### Landing Page

- Mirror the current DRUM landing page structure and intent from the CODATA page.
- Keep the news section and the ticker.
- Include a prominent membership teaser that links to the membership section.
- Replace the external landscape with a tools and resources section.
- Drop the landscape, user stories, tutorials, and CDIF Core Profiles sections.
- Use the DRUM book as the deeper technical companion site.

### Membership

DRUM does not have sub-groups, so replace governance and groups with one unified membership area.

The membership section should:

- Open with a clear, engaging introduction that explains DRUM is open to anyone interested and brings together experts in metrology, standards, best practices, technology, and AI.
- Explain the meeting rhythm: every couple of weeks, rotating across three time zones or regions: Europe/Africa/West Asia, Americas, and East Asia/Oceania/Pacific.
- Leave room for a future dynamic schedule, but do not build the dynamic system yet.
- Render members from a JSON data file.

Seed members from the list below.

#### Members

chair | Jeremy Frey | University of Southampton
secretary | Stuart Chalk | University of North Florida
member | Aileen Day | University of Southampton
member | Cyrus Walther | International Association of Physics Students?
member | Gyorgy Gyomai | OECD
member | Jan Martin Keil | German Aerospace Center
member | Lars Bärring | Lund University?
member | Maximilian Gruber | Physikalisch-Technische Bundesanstalt
member | Michael Ward | Elsevier
member | Pascal Heus | CODATA / Freelance
member | Steven Emmerson | Retired, NSF Unidata Program Center
member | Toshihiro Ashino | Association for Computing Machinery
member | Richard Brown | National Physical Laboratory (NPL)
member | Richard Hartshorn | University of Canterbury
member | Simon Hodson | CODATA
member | Sirko Schindler | German Aerospace Center
past | Robert J. Hanisch | NIST
past | Simon Cox |
past | Joachim Meier | Physikalisch-Technische Bundesanstalt
past | Janet Miles |

### News

- Keep the CDIF-style news section driven by JSON.
- Replace the current content with DRUM-appropriate generated examples.

### Resources

- Use the `drum_logo` from `src/assets/images` as the primary visual anchor.
- Replace the CDIF logo and hero treatment with a DRUM-branded version.
- Shift the visual theme slightly darker and more blackish to match the logo.

## Branding

- Replace the groups page with a simple members page.
- Keep the page structure lean; there are no subgroups to model.
- Store member data in JSON.

## Working Rules

- Reuse the CDIF codebase patterns where they fit, but do not preserve CDIF content that no longer applies.
- Prefer incremental changes over a full rewrite.
- Keep the site practical and maintainable rather than over-designed.
- Ensure the final result is suitable for review by DRUM members and CODATA.

## Phased Approach

Do the work in this order and stop between phases to consolidate the output:

1. Create a comprehensive `DRUM.md` that aggregates the information needed to build the site.
2. Generate an `AGENTS.md` file, similar to the CDIF project version, but tailored to DRUM.
3. Implement the initial project scaffolding.
4. Generate the website.
5. Run a collaborative review loop until the site is approved.

After approval, push the work to the `codata/drum-www` GitHub project for review by other group members and CODATA.
