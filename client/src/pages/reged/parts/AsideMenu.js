import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";

const AsideMenu = ({ info, burger }) => {
  const [flag, setFlag] = useState(false);
  const [text, setText] = useState("");
  const handleLogOut = () => {
    localStorage.setItem("token", "");
    setFlag(!flag);
  };
  const handleText = (e) => setText(e.target.value);
  const handleSubmit = () => {
    if (text !== "") {
      console.log(text);
    }
  };
  return (
    <div className={burger ? "menu__box" : "menu__box-aside"}>
      {flag && <Redirect to="/login" />}
      <Link to="/">
        <h1 className="menu__box-aside-logo menu__box-aside-link">
          Telephonebook App
        </h1>
      </Link>
      <div className="menu__box-aside__user">
        <div className="menu__box-aside__user-pic"></div>
        <div className="menu__box-aside__user-info">
          <h3>
            {info.displayName}, {info.email}
          </h3>
          <p onClick={handleLogOut}>Log out</p>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="menu__box-aside__search">
        <input
          className="menu__box-aside__search-input"
          value={text}
          type="text"
          onChange={handleText}
          placeholder="Search for a contact"
        />
        <input
          className="menu__box-aside__search-submit"
          type="submit"
          value="🔍"
        />
      </form>
      <div className="menu__box-aside__categories">
        <div className="menu__box-aside__categories-label">
          <h2>Categories</h2>
        </div>
        <Link to="/">
          <div className="menu__box-aside__categories-item">All</div>
        </Link>
        <Link to="/work">
          <div className="menu__box-aside__categories-item">Work</div>
        </Link>
        <Link to="/family">
          <div className="menu__box-aside__categories-item">Family</div>
        </Link>
      </div>
      <div className="menu__box-aside__new-contact menu__box-aside-link">
        <Link to="/new-contact">
          <p>Add new contact</p>
        </Link>
      </div>
    </div>
  );
};

export default AsideMenu;
