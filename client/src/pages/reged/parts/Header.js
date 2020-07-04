import React from "react";
import { Link } from "react-router-dom";
import SideMenu from './SideMenu';
import DropDown from './DropDown';

const Header = () => {
  return (
    <div className="header">
      <SideMenu />
      <div className="header_logo">
        All contacts
      </div>
      <DropDown />
    </div>
  );
};

export default Header;
