import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import helper from "../helper";
import Header from "../pages/reged/parts/Header";
import AsideMenu from "../pages/reged/parts/AsideMenu";

const usePage = (Page, label, dots = false) => {
  const [flag, setFlag] = useState(null);
  const [user, setUser] = useState();
  const getInfo = helper.useCheck();
  useEffect(() => {
    getInfo("api/check", localStorage.getItem("token")).then((data) => {
      if (data.login === true) {
        setUser(data.user);
        setFlag(data.login);
      } else {
        setFlag(false);
      }
    });
  }, [flag]);
  if (flag !== null) {
    if (flag === true) {
      return (
        <div className="main">
          <div className="main_page">
            <Header info={user} label={label}/>
            <Page user={user}/>
          </div>
        </div>
      );
    } else if (flag === false) {
      return <Redirect to="/login" />;
    }
  } else
    return (
      <div className="unreg-page_main">
        <div className="unreg-page_card unreg-page_card-error-block">
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
