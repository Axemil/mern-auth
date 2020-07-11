import React from "react";
import { useLocation } from "react-router-dom";
import SideMenu from './SideMenu';
import DropDown from './DropDown';

const Header = ({ info, label, dots }) => {
  return (
    <div className="header">
      <SideMenu info={info} burger={true}/>
      <div className="header_logo">
        {label}
      </div>
      {dots && <DropDown />}
    </div>
  );
};

export default Header;
