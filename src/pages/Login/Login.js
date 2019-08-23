import React from 'react';

const Login = props => {
  return (
    <div className={`login ${props.loggedIn ? 'login--slide' : ''}`}>
      <div className="login__container">
        <h1 className="login__header">Welcome to HRX</h1>
        <form onSubmit={props.submitName}>
          <input
            onChange={props.changeName}
            type="text"
            placeholder="enter your name"
            className="login__input"
          />
          <input type="submit" value="Submit" className="login__submit" />
        </form>
      </div>
    </div>
  );
};

export default Login;
