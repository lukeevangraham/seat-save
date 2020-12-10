import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUpcomingEvents } from "../../store/actions/index";

import EventTable from "../../components/EventTable/EventTable";

const ReservationList = (props) => {
  useEffect(() => {
    props.fetchUpcomingEvents();
  }, [props.fetchUpcomingEvents]);

  let renderList = <div>Loading...</div>;

  if (props.events.length > 0) {
    renderList = <EventTable events={props.events} admin={true} />;
  }

  return (
    <div>
      <h2>Reservation List</h2>

      {renderList}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { events: state.event.events };
};

export default connect(mapStateToProps, { fetchUpcomingEvents })(
  ReservationList
);
