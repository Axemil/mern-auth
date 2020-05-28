import React from "react";
import { Link } from "react-router-dom";

const Registrate = () => {
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
        <div className="unreg-page_block-input">
          <label>Email: </label>
          <input
            id="email"
            name="email"
            placeholder="Enter email"
            type="text"
            className="unreg-page_input"
          />
        </div>
        <div className="unreg-page_block-input">
          <label>Name: </label>
          <input
            id="Name"
            name="Name"
            placeholder="Enter name"
            type="text"
            className="unreg-page_input"
          />
        </div>
        <div className="unreg-page_block-input">
          <label>Password: </label>
          <input
            id="password"
            name="password"
            placeholder="Enter password"
            type="text"
            className="unreg-page_input"
          />
        </div>
        <div className="unreg-page_block-input">
          <label style={{fontSize: "1rem"}}>Password confirm: </label>
          <input
            id="Password confirm"
            name="Password confirm"
            placeholder="Reenter password"
            type="text"
            className="unreg-page_input"
          />
        </div>
        <div className="unreg-page_block">
          <button className="unreg-page_button">Sign in</button>
        </div>
      </div>
    </div>
  );
};

export default Registrate;
