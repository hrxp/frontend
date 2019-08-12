# Slack Archive Viewer

*Browse and search slack export archives in the browser.*

A simple app providing a limited API for querying the JSON output of Slack exports with a React.js-based web
interface for consuming the API.

## Instructions

1. Install the dependencies.
    `npm i`

2. Create a `slack_backup` directory in the root directory.

3. Generate a Slack export and unzip the contents to the `slack_backup` directory.

4. Run webpack
    `npm run start:webpack`

5. Run the dev server.
    `npm start:dev`

6. Open `localhost:${PORT}` in your browser.