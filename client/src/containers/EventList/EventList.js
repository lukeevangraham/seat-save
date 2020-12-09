import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchUpcomingEvents } from "../../store/actions/index";

const EventList = (props) => {
  useEffect(() => {
    props.fetchUpcomingEvents();
  }, []);

  let eventList = <div>Loading...</div>;

  if (props.events.events.length) {
    eventList = props.events.events.map((event) => {
      return (
        <div key={event._id}>
          <div>{event.eventName}</div>
        </div>
      );
    });
  }

  return (
    <div>
      {console.log("event list loading!")}
      <h2>Event List</h2>
      {eventList}
      <br />
      <br />
      <Link to="/admin">Admin</Link>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    events: state.event,
  };
};

export default connect(mapStateToProps, { fetchUpcomingEvents })(EventList);
