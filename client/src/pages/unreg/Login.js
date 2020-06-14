import React from "react";
import { Link } from "react-router-dom";
import helper from "../../helper";

const Login = () => {
  const [email, emailInput] = helper.useInput({
    type: "email",
    placeholder: "Email",
    alternate: true
  });
  const [password, passwordInput] = helper.useInput({
    type: "password",
    placeholder: "Password",
    alternate: true
  });
  const inputs = [ emailInput, passwordInput ]
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
        {[...inputs]}
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
