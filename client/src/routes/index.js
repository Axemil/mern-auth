import React from "react";
import { Route, Switch } from "react-router-dom";
import Pages from "../pages";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Pages.Main} />
      <Route exact path="/category/:filter" component={Pages.Main} />
      <Route exact path="/contact/change/:userId" component={Pages.FormContact} />
      <Route exact path="/contact/new-contact" exact component={Pages.FormContact} />
      <Route exact path="/registrate" exact component={Pages.Registrate} />{" "}
      <Route exact path="/login" exact component={Pages.Login} />
      <Route component={Pages.Page404} />
    </Switch>
  );
};

export default Router;
