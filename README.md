# HRX Portal

## Getting Started

- Run `npm i`
- Run `cp .env.example .env`, then open `.env` and edit the values as needed
- Run `npm run dev`

## Environment variables

| Name                              | Description                                               | Required? | Default                                    |
|-----------------------------------|-----------------------------------------------------------|-----------|--------------------------------------------|
| `REACT_APP_SLACK_LOGIN_CLIENT_ID` | Client ID that will be used for "Sign in with Slack" flow | No        | `671720357619.724476729541`                |
| `REACT_APP_API_BASE_URL`          | Base URL for the HRXP API                                 | No        | `https://hrx-portal-api-dev.herokuapp.com` |

Environment variables are handled by [Create React App's `.env` implementation](https://create-react-app.dev/docs/adding-custom-environment-variables).

Defaults are set in `.env`, you can override them by creating an `.env.local` file.

## Available Scripts

In the project directory, you can run:

`npm start`

To run the app in development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
