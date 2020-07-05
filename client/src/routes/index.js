import React from "react";
import { Route, Switch } from "react-router-dom";
import Pages from "../pages";
import helper from "../helper"


const Router = () => {
    return (
      <Switch>
        <Route path="/" exact component={() => helper.usePage(Pages.Main, 'All contacts')} />
        <Route path="/new-contact" exact component={() => helper.usePage(Pages.AddContact, 'Add new contact')} />
        <Route path="/registrate" exact component={Pages.Registrate} />{" "}
        <Route path="/login" exact component={Pages.Login} />
      </Switch>
    );
  };

export default Router;
