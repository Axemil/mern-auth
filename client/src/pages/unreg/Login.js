import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import helper from "../../helper";


const Login = ({login}) => {
  const history = useHistory();
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
      setMessage(true);
      localStorage.setItem('token', result.data.token)
      setTimeout(() => history.push("/"),1000)
    } else if (error) {
      setMessage(false, error);
    }
  }, [result, error, login, setMessage]);
  return (
    <div className="unreg-page_main">
      <div className="unreg-page_card">
        <h2>
          <span aria-label="Emoji" role="img">
            🔑
          </span>{" "}
          Login{" "}
          <span aria-label="Emoji" role="img">
            🔑
          </span>
        </h2>
        {message}
        {emailInput}
        {passwordInput}
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
