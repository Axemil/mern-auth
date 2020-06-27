import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import helper from "../../helper";


const Login = ({login}) => {
  const [flag,setFlag] = useState(false)
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
  const [result, error, fetching] = helper.useFetch("api/login", {
    email,
    password,
  });
  const [message, setMessage] = helper.useMessage();
  useEffect(() => {
    if (result) {
      login(result.data);
      setMessage(true, result.data);
      setFlag(true)
    } else if (error) {
      setMessage(false, error);
    }
  }, [result, error]);
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
        {flag && <Redirect to="/main" />}
        {message}
        {[emailInput, passwordInput]}
        <div className="unreg-page_block">
          <button onClick={fetching} className="unreg-page_button">Sign in</button>
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
