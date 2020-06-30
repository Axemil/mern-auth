import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="regged-page_header regged-page_block">
      <Link to="/main">
        <h2 className="regged-page_header_logo regged-page_header_link">
          <span aria-label="Emoji" role="img">
            ☎️
          </span>{" "}
          Tel.App{" "}
          <span aria-label="Emoji" role="img">
            ☎️
          </span>
        </h2>
      </Link>
      <div className="regged-page_header_list">
        <Link to="/message">
          <div className="regged-page_header_list_item regged-page_header_link">
            Messages
          </div>
        </Link>
        <Link to="/main/profile">
          <div className="regged-page_header_list_item regged-page_header_link">
            Profile
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
