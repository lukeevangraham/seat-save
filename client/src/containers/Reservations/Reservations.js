import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchPopulatedEvent } from "../../store/actions/index";

const Reservations = (props) => {
  let selectedEvent
  useEffect(() => {
    props.fetchEvent(props.match.params.id);
  }, [props.fetchEvent]);
  return (
    <div>
      <h2>Reservations</h2>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    event: state.event.events
  }
}

export default connect(mapStateToProps, { fetchPopulatedEvent })(Reservations);
