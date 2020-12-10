import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchEvent } from "../../store/actions";

import ReserveForm from "./ReserveForm/ReserveForm";

const EventReserve = (props) => {
  const onSubmit = (formValues) => {
    console.log(formValues)
  }
  useEffect(() => {
    props.fetchEvent(props.match.params.id);
  }, [props.fetchEvent]);

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
      <h3>Make Reservation</h3>
      {renderForm}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { event: state.event.events };
};

export default connect(mapStateToProps, { fetchEvent })(EventReserve);
