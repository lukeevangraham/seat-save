import React, { useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link"
import { connect } from "react-redux";
import { fetchUpcomingEvents, deleteEvent } from "../../store/actions/index";

import EventTable from "../../components/EventTable/EventTable";

const EventList = (props) => {
  useEffect(() => {
    props.fetchUpcomingEvents();
  }, [props.fetchUpcomingEvents]);  

  let eventList = <div>Loading...</div>;

  if (props.events.events.length) {
    eventList = <EventTable events={props.events.events} isAuth={props.isAuth} delete={props.deleteEvent} />
  }

  return (
    <div>
      <h2>Event List</h2>
      {eventList}
      <br />
      <br />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    events: state.event,
  };
};

export default connect(mapStateToProps, { fetchUpcomingEvents, deleteEvent })(EventList);
