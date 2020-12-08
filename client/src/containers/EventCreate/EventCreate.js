import React from "react";
import { connect } from "react-redux";
import { createEvent } from "../../store/actions";
import EventForm from "./EventForm/EventForm";

const EventCreate = (props) => {
  const onSubmit = (formValues) => {
    console.log("VALUES: ", formValues);
  };

  return <EventForm onSubmit={onSubmit} />
};

export default connect(null, { createEvent })(EventCreate);
