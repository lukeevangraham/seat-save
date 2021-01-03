import React, { useEffect } from "react";
import { Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";
import { createEvent, startCreateGroup } from "../../store/actions";
import EventForm from "./EventForm/EventForm";

const EventCreate = (props) => {
  useEffect(() => {
    props.startCreateGroup()
  }, [props.startCreateGroup])

  const onSubmit = (formValues) => {
    props.createEvent(formValues);
  };

  const createdRedirect = props.created ? <Redirect to="/" /> : null;

  return (
    <React.Fragment>
      {createdRedirect}
      <h2>Create An Event:</h2>
      <EventForm onSubmit={onSubmit} />
      <br />
      <br />
      <br />
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    created: state.event.created,
  };
};

export default connect(mapStateToProps, { createEvent, startCreateGroup })(EventCreate);
