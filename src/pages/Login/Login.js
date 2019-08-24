// Todo: Refactor with Auth. Current code is a placeholder that was moved from old login component

import React from "react";

const Login = props => {
  return (
    <div className={`login ${props.loggedIn ? 'login--slide' : ''}`}>
      <div className="login__container">
        <h1 className="login__header">Welcome to HRX</h1>
        <a href="https://hackreactorx.slack.com/oauth/authorize?scope=identity.basic%20identity.avatar%20identity.email%20identity.team&client_id=671720357619.724476729541">
          <img src="https://api.slack.com/img/sign_in_with_slack.png" />
        </a>
      </div>
    </div>
  );
};

export default Login;
