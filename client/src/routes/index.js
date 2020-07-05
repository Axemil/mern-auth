import React from "react";
import { Route, Switch } from "react-router-dom";
import Pages from "../pages";
import helper from "../helper"


const Router = () => {
    return (
      <Switch>
        <Route path="/" exact component={() => helper.usePage(Pages.Main, 'All contacts', true)} />
        <Route path="/work" exact component={() => helper.usePage(Pages.Main, 'Work contacts', true, 'Work')} />
        <Route path="/family" exact component={() => helper.usePage(Pages.Main, 'Family contacts', true, 'Family')} />
        <Route path="/searcg" exact component={() => helper.usePage(Pages.Main, 'Search', true)} />
        <Route path="/new-contact" exact component={() => helper.usePage(Pages.AddContact, 'Add new contact', false)} />
        <Route path="/registrate" exact component={Pages.Registrate} />{" "}
        <Route path="/login" exact component={Pages.Login} />
      </Switch>
    );
  };

export default Router;
