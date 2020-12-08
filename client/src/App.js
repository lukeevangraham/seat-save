import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import EventList from "./containers/EventList/EventList";
import EventCreate from "./containers/EventCreate/EventCreate"
import history from "./history";

const App = (props) => {
  return (
    <div>
      <CssBaseline />
      <Router history={history}>
        <div>
          <Container maxWidth="md">
            <h1>App</h1>
            <Switch>
              <Route path="/" exact component={EventList} />
              <Route path="/admin" component={EventCreate} />
            </Switch>
          </Container>
        </div>
      </Router>
    </div>
  );
};

export default App;
