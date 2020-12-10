import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

import Layout from "./hoc/Layout/Layout";
import EventList from "./containers/EventList/EventList";
import EventCreate from "./containers/EventCreate/EventCreate";
import EventReserve from "./containers/EventReserve/EventReserve";
import ReservationList from "./containers/Reservations/ReservationList";
import Reservations from "./containers/Reservations/Reservations";

const App = (props) => {
  let routes = (
    <Switch>
      <Route path="/" exact component={EventList} />
      <Route path="/admin" component={EventCreate} />
      <Route path="/reserve/:id" exact component={EventReserve} />
      <Route path="/reservations" exact component={ReservationList} />
      <Route path="/reservations/:id" exact component={Reservations} />
    </Switch>
  );

  return (
    <div>
      <CssBaseline />
      <Container maxWidth="md">
        <Layout>{routes}</Layout>
      </Container>
    </div>
  );
};

export default withRouter(App);
