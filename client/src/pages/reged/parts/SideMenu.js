import React from "react";
import AsideMenu from './AsideMenu';

const SideMenu = ({ info, burger }) => {
  return (
    <div className="header_burger-menu">
      <input id="menu__toggle" type="checkbox" />
      <label className="menu__btn" htmlFor="menu__toggle">
        <span></span>
      </label>

      <AsideMenu info={info} burger={burger}/>
    </div>
  );
};

export default SideMenu;
