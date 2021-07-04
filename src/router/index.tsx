import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "../pages/home";

function LayoutContentRouter() {
  /* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
      <Route exact path="/home">
        <HomePage />
      </Route>
      <Route>
        <div>404</div>
      </Route>
    </Switch>
  );
}

export default LayoutContentRouter;
