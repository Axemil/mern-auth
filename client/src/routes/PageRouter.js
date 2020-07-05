import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

const PageRouter = () => {
  return (
    <Switch>
      <Route path="/" exact component={() => <h1>Hello</h1>} />
      <Route path="/new-contact" component={() => <h1>Hello again</h1>} />
    </Switch>
  );
};

export default PageRouter;
