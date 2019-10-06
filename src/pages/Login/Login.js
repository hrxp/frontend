import React from "react";

const SLACK_LOGIN_TEAM =
  process.env.REACT_APP_SLACK_LOGIN_TEAM || "hrxapprentice-kgb8552";
const Login = props => {
  return (
    <div className="login-container">
      <div className="login">
        <a
          href={`https://${SLACK_LOGIN_TEAM}.slack.com/oauth/authorize?scope=identity.basic%20identity.avatar%20identity.email%20identity.team&client_id=${process.env.REACT_APP_SLACK_LOGIN_CLIENT_ID}&redirect_url=${window.location.origin}/slack/oauth/redirect`}
        >
          <img src="https://api.slack.com/img/sign_in_with_slack.png" />
        </a>
      </div>
    </div>
  );
};

export default Login;
