# GEMINI.md - Instructional Context for Reda Ouaradane's CV Project

## Project Overview
This project is a personal CV and portfolio for **Reda Ouaradane**, featuring a "Premium" aesthetic (Prussian Blue: `#0B2B53`, Teal: `#049A9E`). 

### Architecture: Single Source of Truth
The project uses a **decoupled architecture** where all content is managed in a central data file.
- **Data Source:** `cv-data.js` (Contains all text, experiences, skills, and contact info).
- **Web Version:** `index.html` (Interactive, tabbed interface, renders dynamically from `cv-data.js`).
- **PDF Version:** `cv-static.html` (A4 optimized layout, renders dynamically from `cv-data.js`).

## Building and Running
### Prerequisites
- Node.js installed.
- Dependencies: `npm install puppeteer`.

### Deployment & Updates
- **Deployment:** Vercel (Auto-deploy from GitHub).
- **SEO & Responsiveness:** `index.html` is optimized for search engines (JSON-LD) and fully responsive for mobile.
- **Content Updates:**
  1. Modify the values in `cv-data.js`.
  2. Refresh `index.html` to see changes on the web.
  3. Run the PDF generator to update the file:
```bash
node generate-pdf.js
```

## Key Files
- `cv-data.js`: **CRITICAL FILE.** The central repository for all CV information.
- `index.html`: The interactive web version. Uses `window.onload` to render data.
- `cv-static.html`: The print-optimized version used by Puppeteer.
- `generate-pdf.js`: Script using Puppeteer to export `cv-static.html` as `CV_Reda_Ouaradane.pdf`.
- `photo.jpeg`: Profile image (140x140px recommended for PDF, responsive on web).
- `robots.txt` & `sitemap.xml`: SEO configuration files.

## Development Conventions
- **Synchronization:** Always ensure changes are made in `cv-data.js`. Do not hardcode text in HTML files.
- **Visuals:** Maintain the SaaS Premium style with Plus Jakarta Sans and Lucide icons.
- **Responsiveness:** Ensure all layouts are fluid and functional on mobile devices using Tailwind's responsive prefixes.
- **Printing:** The "Télécharger PDF" button in `index.html` links to the pre-generated `CV_Reda_Ouaradane.pdf`.
- **Icons:** Use Lucide icons consistently.
