import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="unreg-page_main">
      <div className="unreg-page_card">
        <h2>
          <span aria-label="Emoji" role="img">
            🎓
          </span>{" "}
          Telephonebook app{" "}
          <span aria-label="Emoji" role="img">
            🎓
          </span>
        </h2>
        <h4>
          <span aria-label="Emoji" role="img">
            🙌
          </span>{" "}
          Made for educaiton{" "}
          <span aria-label="Emoji" role="img">
            🙌
          </span>
        </h4>
        <p>On this page u can:</p>
        <div className="unreg-page_list">
          <Link className="unreg-page_list_item" to="/login">
            <span aria-label="Emoji" role="img">
              🔑
            </span>{" "}
            Login
          </Link>
          <Link className="unreg-page_list_item" to="/Registrate">
            <span aria-label="Emoji" role="img">
              ✔️
            </span>{" "}
            Registrate
          </Link>
        </div>
        <p>If you are logged in:</p>
        <div className="unreg-page_list">
          <Link className="unreg-page_list_item" to="/main">
            <span aria-label="Emoji" role="img">
              📱
            </span>{" "}
            Working with telephone numbers
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
