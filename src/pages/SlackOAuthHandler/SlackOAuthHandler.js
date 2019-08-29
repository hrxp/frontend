import React from "react";
import axios from "axios";

export default class SlackOAuthHandler extends React.Component {
  async componentDidMount() {
    const currentHref = window.location.href; // URL string
    const currentUrl = new URL(currentHref); // `URL` instance
    const oauthCode = currentUrl.searchParams.get("code");

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/auth/access_token`,
        {
          code: oauthCode,
        }
      );
      if (res.data) {
        localStorage.setItem("hrxp_jwt", res.data);
      }
      window.location.href = "/";
    } catch (e) {
      console.error("Axios error", e);
      window.location.href = "/login";
    }
  }

  render() {
    return (
      <div className="login-container">
        <div className="login">
          <h3>Exchanging your Slack login for an access token...</h3>
        </div>
      </div>
    );
  }
}
