import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Pages from "../pages";
import helper from "../helper";
import axios from "axios"

const Router = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    axios.get("api/check", {
      headers: {"x-auth-token": localStorage.getItem('token')}
    }).then(({ data }) => {
      if (data.login === true) {
        setUser(data.user.categories)
      }
    })
  }, []);
  return (
    <Switch>
      {user.map((data, index) => (
        <Route
          key={index}
          path={data === 'All' ? "/" :  "/" + data.toLowerCase()}
          exact
          component={() =>
            helper.usePage(Pages.Main, data + " contacts", true, data)
          }
        />
      ))}
      <Route
        path="/searcg"
        exact
        component={() => helper.usePage(Pages.Main, "Search", true)}
      />
      <Route
        path="/new-contact"
        exact
        component={() =>
          helper.usePage(Pages.AddContact, "Add new contact", false)
        }
      />
      <Route path="/registrate" exact component={Pages.Registrate} />{" "}
      <Route path="/login" exact component={Pages.Login} />
    </Switch>
  );
};

export default Router;
