import _ from "lodash";
import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { fetchEvent, editEvent } from "../../store/actions/index";
import EventForm from "../EventCreate/EventForm/EventForm";

const EventEdit = (props) => {
  useEffect(() => {
    props.fetchEvent(props.match.params.id);
  }, [props.fetchEvent]);

  const onSubmit = (formValues) => {
    props.editEvent(props.match.params.id, formValues);
  };

  const createdRedirect = props.created ? <Redirect to="/" /> : null;

  let form = <p>Hello</p>;

  if ((props.event.length = 1)) {
    let eventCopy = props.event[0];
    eventCopy ? (eventCopy.date = new Date(new Date(eventCopy.date).toString().split('GMT')[0]+' UTC').toISOString().split('.')[0]) : null;

    form = <EventForm initialValues={props.event[0]} onSubmit={onSubmit} />;
  }

  return (
    <div>
      {createdRedirect}
      <h2>Event Edit</h2>
      {form}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    event: state.event.events.filter(
      (event) => event._id === ownProps.match.params.id
    ),
    created: state.event.created,
  };
};

export default connect(mapStateToProps, { fetchEvent, editEvent })(EventEdit);
