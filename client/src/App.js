import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

import Layout from "./hoc/Layout/Layout";
import EventList from "./containers/EventList/EventList";
import EventCreate from "./containers/EventCreate/EventCreate";
import EventReserve from "./containers/EventReserve/EventReserve";
import EventDelete from "./containers/EventDelete/EventDelete";
import EventEdit from "./containers/EventEdit/EventEdit";
import ReservationList from "./containers/Reservations/ReservationList";
import Reservations from "./containers/Reservations/Reservations";
import ReservationEdit from "./containers/Reservations/ReservationEdit";

const App = (props) => {
  let routes = (
    <Switch>
      <Route path="/" exact component={EventList} />
      <Route path="/reserve/:id" exact component={EventReserve} />
    </Switch>
  );

  if (props.isAuthenticated) {
    routes = (
      <Switch>
        <Route path="/" exact render={(props) => <EventList isAuth={true} />} />
        <Route path="/event-create" component={EventCreate} />
        <Route path="/events/edit/:id" component={EventEdit} />
        <Route path="/events/delete/:id" component={EventDelete} />
        <Route path="/reservations" exact component={ReservationList} />
        <Route path="/reservations/:id" exact component={Reservations} />
        <Route path="/reservations/edit/:id" exact component={ReservationEdit} />
        <Route path="/reserve/:id" exact component={EventReserve} />
      </Switch>
    );
  }

  return (
    <div>
      <CssBaseline />
      <Container maxWidth="md">
        <Layout>{routes}</Layout>
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isSignedIn,
  };
};

export default withRouter(connect(mapStateToProps)(App));
