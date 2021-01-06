import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchPopulatedEvent, deleteGroup } from "../../store/actions/index";

import ShowGroups from "../../components/ShowGroups/ShowGroups";

const Reservations = (props) => {
  useEffect(() => {
    props.fetchPopulatedEvent(props.match.params.id);
  }, [props.fetchEvent]);

  let renderShowGroups = <div>Loading...</div>;

  if (props.event[0]) {
    if (props.event[0].groups) {
      renderShowGroups = <ShowGroups event={props.event} delete={props.deleteGroup} />;
    }
  }

  return (
    <div>
      <h2>Reservations</h2>
      {renderShowGroups}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    event: state.event.events
  };
};

export default connect(mapStateToProps, { fetchPopulatedEvent, deleteGroup })(Reservations);
