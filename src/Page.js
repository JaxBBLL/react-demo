import React from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import List from "@views/List";
import Detail from "@views/Detail";
import Home from "@views/Home";

export default () => (
  <Router>
    <Switch>
      <Route from="/" exact component={() => <Redirect to="/home" />} />
      <Route path="/home" exact component={Home} />
      <Route path="/list" exact component={List} />
      <Route path="/detail" exact component={Detail} />
      <Route component={() => <Redirect to="/404" />} />
    </Switch>
  </Router>
);
