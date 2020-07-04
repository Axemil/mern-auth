import React, {useState} from "react";
import { Link, Redirect } from "react-router-dom";

const AsideMenu = ({ info }) => {
  const [flag, setFlag] = useState(false);
  const handleLogOut = () => {
      localStorage.setItem('token', '');
      setFlag(!flag)
  }
  return (
    <div class="menu__box-aside">
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
      <form className="menu__box-aside__search">
          <input className="menu__box-aside__search-input" type="text" placeholder="Search for a contact"/>
          <input className="menu__box-aside__search-submit" type="submit" value="🔍" />
      </form>
    </div>
  );
};

export default AsideMenu;
