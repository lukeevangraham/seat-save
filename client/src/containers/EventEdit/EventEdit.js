import _ from "lodash";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchEvent, editEvent } from "../../store/actions/index";
import EventForm from "../EventCreate/EventForm/EventForm";

const EventEdit = (props) => {
useEffect(() => {
    props.fetchEvent(props.match.params.id);
}, [])

const onSubmit = formValues => {
    props.editEvent(props.match.params.id, formValues)
}

  return (
    <div>
        {console.log("EVENT: ", _.pick(props.event, 'date', 'eventName', 'openSpots'))}
      <h2>Event Edit</h2>
      <p>This is where events can be edited</p>
      <EventForm initialValues={_.pick(props.event, 'date', 'eventName', 'openSpots')} onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToProps = (state) => {
    return {
        event:  state.event.events
    }
}

export default connect(mapStateToProps, { fetchEvent, editEvent })(EventEdit);
