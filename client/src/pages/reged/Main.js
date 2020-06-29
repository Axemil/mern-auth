import React, { useState } from "react";
import { Link } from "react-router-dom";

const Main = ({ user }) => {
  const [info, ] = useState(user);

  return (
    <div className="regged-page">
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
          <Link to="/main/messages">
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
      <div className="regged-page_body regged-page_block">
        <div className="regged-page_body_welcome-block">
          <h2>
            {" "}
            <span aria-label="Emoji" role="img">
              😏
            </span>{" "}
            Welcome, {info.displayName}, on this page you can:
          </h2>
        </div>
        <div className="regged-page_body_list">
          <div className="regged-page_body_list-item">
            <h2>Quick view on profile</h2>
            <div className="regged-page_body_list-info">
              <div className="regged-page_body_list-profile-item">
                <p>Nickname: {info.displayName}</p>
              </div>
              <div className="regged-page_body_list-profile-item">
                <p>Email: {info.email}</p>
              </div>
            </div>
            <Link to="/main/profile">
              <div className="regged-page_body_list-button">View profile</div>
            </Link>
          </div>
          <div className="regged-page_body_list-item">
            <h2>View messages</h2>
            <div className="regged-page_body_list-info"></div>
            <Link to="/main/message">
              <div className="regged-page_body_list-button">Work with messages</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
