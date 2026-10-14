# The Unnecessary Physics Archive

A static, responsive website for a public archive. Visual direction: academic editorial, warm ivory, black ink, restrained burgundy, serif display type, and monospaced catalogue labels.

## Contents
- `index.html` — homepage, searchable archive index, Paper 001 and Paper 002 detail records, about/disclaimer
- `styles.css` — responsive styling
- `app.js` — archive search/filter and mobile navigation
- `paper-001.pdf` — Paper 001: nail insertion in bamboo
- `paper-002.pdf` — Paper 002: relaxation and memory effects in a computational phenomenological model

## Run locally
Open `index.html` in a browser. For a local web server, run from this directory:
```bash
python -m http.server 8000
```
Then visit `http://localhost:8000`.

## Deployment
The site is static HTML/CSS/JavaScript. It is designed to deploy from the repository root on Netlify with no build command and publish directory `.`. When Git-based continuous deployment is connected, commits to the configured production branch trigger a new deploy.

## Editorial/data notes
- English summaries are editorial summaries of the Indonesian paper, not verbatim abstracts.
- Paper 001 reports numerical-simulation outputs, not measurements from a physical nailing experiment.
- Paper 002 uses dimensionless mathematical parameters and does not report empirical human-participant data; its results are not evidence of human attachment mechanisms.
- The source PDFs' reference lists have not been independently audited.
- Peer-review status is marked “Not stated” rather than inferred.
- The archive is public-facing; no analytics, forms, or tracking scripts are included.
