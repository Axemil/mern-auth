import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "./parts/Header";

const Main = ({ user }) => {
  const [info] = useState(user);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get("api/get-messages").then(({ data }) => setMessages(data.result));
  }, [info]);

  return (
    <div className="regged-page">
      <Header />
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
            <div className="regged-page_body_list-info">
              {messages.map(({ text, author, deletedAt }, index, array) => {
                if (!deletedAt)
                  return (
                    <div key={index} className="regged-page_body_list-message">
                      <p className="regged-page_body_list-message-text">
                        {text}
                      </p>{" "}
                      <p className="regged-page_body_list-message-author">
                        {author}
                      </p>{" "}
                    </div>
                  );
              })}
            </div>
            <Link to="/message">
              <div className="regged-page_body_list-button">
                Work with messages
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
