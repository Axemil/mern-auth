import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import Header from "../pages/reged/parts/Header";
import axios from "axios";

const usePage = (Page, label, dots = false, category = "All") => {
  const [flag, setFlag] = useState(null);
  const [user, setUser] = useState();
  useEffect(() => {
    axios
      .get("api/check", {
        headers: { "x-auth-token": localStorage.getItem("token") },
      })
      .then(({ data }) => {
        if (data.login === true) {
          setUser(data.user);
          setFlag(data.login);
        } else {
          setFlag(false);
        }
      });
  }, [Page]);
  if (flag !== null) {
    if (flag === true) {
      return (
        <div className="main">
          <div className="main_page">
            <Header info={user} label={label} dots={dots} />
            <Page user={user} filter={category} />
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
