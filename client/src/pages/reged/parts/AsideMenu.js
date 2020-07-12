import React, { useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import axios from "axios";

const AsideMenu = ({ info, burger }) => {
  const history = useHistory();
  const [categorie, setCategorie] = useState("");
  const [categories] = useState(info.categories);
  const handleLogOut = () => {
    localStorage.setItem("token", "");
    history.push("/login");
  };
  const handleCategorie = (e) => setCategorie(e.target.value);
  const handleAdd = () => {
    if (categorie !== "") {
      axios
        .put("http://localhost:3000/api/add_new-categorie", {
          email: info.email,
          categories: [...info.categories, categorie],
        })
        .then((data) => console.log(data));
    }
  };
  return (
    <div className={burger ? "menu__box" : "menu__box-aside"}>
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
      <div className="menu__box-aside__categories">
        <div className="menu__box-aside__categories-label">
          <h2>Categories</h2>
        </div>
        {categories.map((data, index) => (
          <Link
            key={index}
            to={data === "All" ? "/" : "/category/" + data}
          >
            <div className="menu__box-aside__categories-item">{data}</div>
          </Link>
        ))}
        <form
          onSubmit={handleAdd}
          className="menu__box-aside__categories-addCategorie"
        >
          <input
            className="menu__box-aside__categories-addCategorie-input"
            value={categorie}
            type="text"
            onChange={handleCategorie}
            placeholder="Add new categorie"
          />
          <input
            className="menu__box-aside__categories-addCategorie-submit"
            type="submit"
            value="➕"
          />
        </form>
      </div>
      <div className="menu__box-aside__new-contact menu__box-aside-link">
        <Link to="/contact/new-contact">
          <p>Add new contact</p>
        </Link>
      </div>
    </div>
  );
};

export default AsideMenu;
