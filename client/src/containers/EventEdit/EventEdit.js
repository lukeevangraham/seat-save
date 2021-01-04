import _ from "lodash";
import React, { useEffect } from "react";
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

  let form = <p>Hello</p>;

  if ((props.event.length = 1)) {
    form = <EventForm initialValues={props.event[0]} onSubmit={onSubmit} />;
  }

  return (
    <div>
      <h2>Event Edit</h2>
      <p>This is where events can be edited</p>
      {form}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    event: [state.event.events].filter(
      (event) => event._id === ownProps.match.params.id
    ),
  };
};

export default connect(mapStateToProps, { fetchEvent, editEvent })(EventEdit);
