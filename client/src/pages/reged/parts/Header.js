import React from "react";
import { Link } from "react-router-dom";
import SideMenu from './SideMenu';
import DropDown from './DropDown';

const Header = ({ info, label }) => {
  return (
    <div className="header">
      <SideMenu info={info} burger={true}/>
      <div className="header_logo">
        {label}
      </div>
      <DropDown />
    </div>
  );
};

export default Header;
