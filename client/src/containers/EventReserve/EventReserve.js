import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { fetchEvent, createGroup, startCreateGroup } from "../../store/actions";

import ReserveForm from "./ReserveForm/ReserveForm";

const EventReserve = (props) => {
  useEffect(() => {
    props.fetchEvent(props.match.params.id);
    return () => props.startCreateGroup()
  }, [props.fetchEvent]);

  const onSubmit = (formValues) => {
    props.createGroup(props.match.params.id, formValues);
  };

  const createdRedirect = props.created ? <Redirect to="/" /> : null;

  let renderForm = <div>Loading ...</div>;

  if (props.event)
    renderForm = (
      <div>
        <h4>
          {props.event.eventName} -{" "}
          {new Date(props.event.date).toLocaleDateString("us-en", {
            weekday: "short",
          })}
          {", "}
          {new Date(props.event.date).toLocaleString("en-us", {
            dateStyle: "short",
            timeStyle: "short",
          })}
        </h4>

        <ReserveForm onSubmit={onSubmit} event={props.event} />
      </div>
    );

  return (
    <div>
      {createdRedirect}
      <h2>Make Reservation</h2>
      {renderForm}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    event: state.event.events,
    created: state.group.created
  };
};

export default connect(mapStateToProps, { fetchEvent, createGroup, startCreateGroup })(
  EventReserve
);
