import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="unreg-page_main">
      <div className="unreg-page_card">
        <Link className="unreg-page_button-back" to="/">
          {" "}
          <span aria-label="Emoji" role="img">
            👈
          </span>
        </Link>
        <h2>
          <span aria-label="Emoji" role="img">
            🔑
          </span>{" "}
          Login{" "}
          <span aria-label="Emoji" role="img">
            🔑
          </span>
        </h2>
        <div className="unreg-page_block-input_alternate">
          <input
            id="email"
            name="email"
            placeholder="Email"
            type="email"
            className="unreg-page_input"
          />
        </div>
        <div className="unreg-page_block-input_alternate">
          <input
            id="password"
            name="password"
            placeholder="Password"
            type="password"
            className="unreg-page_input unreg-page_input_last"
          />
        </div>
        <div className="unreg-page_block">
          <button className="unreg-page_button">Sign in</button>
        </div>
        <p>
          Don't have an account?{" "}
          <Link className="unreg-page_Sign-up" to="/registrate">
            Sing up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
