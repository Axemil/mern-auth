import React from "react";
import { Route, Switch } from "react-router-dom";
import Pages from "../pages";
import helper from "../helper"


const Router = ({ login }) => {
    return (
      <Switch>
        <Route path="/" exact component={Pages.UnregMain} />
        <Route path="/registrate" exact component={Pages.Registrate} />{" "}
        <Route path="/login" exact component={() => <Pages.Login login={login} />} />
        <Route path="/main" exact component={() => helper.usePage(Pages.Main)} />
        <Route path="/message" exact component={() => helper.usePage(Pages.Messages)} />
        
      </Switch>
    );
  };

export default Router;
