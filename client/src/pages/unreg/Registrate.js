import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import helper from "../../helper";

const Registrate = () => {
  const [flag, setFlag] = useState(false);
  const [email, emailInput] = helper.useInput({
    type: "text",
    label: "Email: ",
    placeholder: "Enter email",
  });
  const [name, nameInput] = helper.useInput({
    type: "text",
    label: "Name: ",
    placeholder: "Enter name",
  });
  const [password, passwordInput] = helper.useInput({
    type: "text",
    label: "Password: ",
    placeholder: "Enter password",
  });
  const [passwordConfirm, passwordConfirmInput] = helper.useInput({
    type: "text",
    label: "Confirm: ",
    placeholder: "Reenter password",
  });
  const [result, error, fetching] = helper.useFetch("api/register", {
    email,
    password,
    passwordCheck: passwordConfirm,
    displayName: name,
  });
  const [message, setMessage] = helper.useMessage();

  useEffect(() => {
    if (result) {
      setMessage(true, result.data);
      setTimeout(() => setFlag(true), 3000)
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
            👨‍💻
          </span>{" "}
          Registration{" "}
          <span aria-label="Emoji" role="img">
            👩‍💻
          </span>
        </h2>
        {flag && <Redirect to="/login"/>}
        {message}
        {[emailInput, nameInput, passwordInput, passwordConfirmInput]}
        <div className="unreg-page_block">
          <button onClick={fetching} className="unreg-page_button">
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Registrate;
