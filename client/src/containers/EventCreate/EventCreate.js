import React from "react";
import { Redirect } from "react-router-dom"
import { connect } from "react-redux";
import { createEvent } from "../../store/actions";
import EventForm from "./EventForm/EventForm";

const EventCreate = (props) => {
  const onSubmit = (formValues) => {
    props.createEvent(formValues);
  };

  console.log("CREATED: ", props.created);

  const createdRedirect = props.created ? (
    <Redirect to="/" />
  ) : null;

  return (
    <React.Fragment>
      {createdRedirect}
      <h2>Create An Event:</h2>
      <EventForm onSubmit={onSubmit} />
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    created: state.event.created,
  };
};

export default connect(mapStateToProps, { createEvent })(EventCreate);
