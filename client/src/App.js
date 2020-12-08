import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

import Layout from "./hoc/Layout/Layout";
import EventList from "./containers/EventList/EventList";
import EventCreate from "./containers/EventCreate/EventCreate";
import history from "./history";

const App = (props) => {
  let routes = (
    <Switch>
      <Route path="/" exact component={EventList} />
      <Route path="/admin" component={EventCreate} />
    </Switch>
  );

  return (
    <div>
      <CssBaseline />
      <Router history={history}>
        <Container maxWidth="md">
          <Layout>{routes}</Layout>
        </Container>
      </Router>
    </div>
  );
};

export default App;
