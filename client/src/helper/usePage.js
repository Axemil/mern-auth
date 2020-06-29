import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import helper from "../helper";

const usePage = (Page) => {
  const [flag, setFlag] = useState(false);
  const [user, setUser] = useState();
  const getInfo = helper.useCheck();
  useEffect(() => {
    getInfo("api/check", localStorage.getItem("token")).then((data) => {
      if (data.login === true) {
        setUser(data.user);
        setFlag(data.login);
      }
    });
  }, [flag, getInfo]);
  return flag === true ? (
    <Page user={user} />
  ) : (
    <div className="unreg-page_main">
      <div className="unreg-page_card unreg-page_card-error-block">
        <h2 className="unreg-page_card-error">
          <span aria-label="Emoji" role="img">
            🤔
          </span>{" "}
          <Link to="/login">If you are waiting to long, go relogin</Link>
          <span aria-label="Emoji" role="img">
            🤔
          </span>{" "}
        </h2>
        <div className="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default usePage;
