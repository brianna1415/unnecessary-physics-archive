# The Unnecessary Physics Archive — prototype

A static, responsive website for the public archive. The visual direction is academic editorial: warm ivory, black ink, restrained burgundy, serif display type, and monospaced catalogue labels.

## Contents
- `index.html` — homepage, searchable archive index, Paper 001 record, about/disclaimer
- `styles.css` — responsive styling
- `app.js` — archive search/filter and mobile navigation
- `paper-001.pdf` — original uploaded paper, linked for direct download

## Run locally
Open `index.html` in a browser. For a local web server, run from this directory:
```bash
python -m http.server 8000
```
Then visit `http://localhost:8000`.

## Public deployment
This is a static site and has no login or server-side code. To publish it, upload the four files to a static hosting service (for example GitHub Pages, Netlify, or Cloudflare Pages). The site is not automatically hosted on the internet just because this package exists.

## Editorial/data notes
- The displayed English abstract is an editorial translation/summary of the paper's Indonesian abstract, not a verbatim abstract.
- The reported force and safety-factor values are described as numerical-simulation outputs, not physical measurements.
- The source PDF's reference list is not independently audited.
- Peer-review status is marked “Not stated” rather than inferred.
- The archive is public-facing, but no analytics, forms, or tracking scripts are included.
