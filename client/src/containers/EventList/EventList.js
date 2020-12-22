import React, { useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link"
import { connect } from "react-redux";
import { fetchUpcomingEvents } from "../../store/actions/index";

import EventTable from "../../components/EventTable/EventTable";
import GoogleAuth from "../GoogleAuth/GoogleAuth"

const EventList = (props) => {
  useEffect(() => {
    props.fetchUpcomingEvents();
  }, [props.fetchUpcomingEvents]);

  let eventList = <div>Loading...</div>;

  if (props.events.events.length) {
    eventList = <EventTable events={props.events.events} />
  }

  return (
    <div>
      <h2>Event List</h2>
      {eventList}
      <br />
      <br />
      <Link component={RouterLink} to="/admin">Admin</Link>
      <GoogleAuth />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    events: state.event,
  };
};

export default connect(mapStateToProps, { fetchUpcomingEvents })(EventList);
