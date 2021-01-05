import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { fetchEvent, createGroup, startCreateGroup } from "../../store/actions";

import ReserveForm from "./ReserveForm/ReserveForm";
import GroupConfirm from "../../components/GroupConfirm/GroupConfirm";

const EventReserve = (props) => {
  useEffect(() => {
    props.fetchEvent(props.match.params.id);
    return () => props.startCreateGroup();
  }, [props.fetchEvent]);

  const onSubmit = (formValues) => {
    props.createGroup(props.match.params.id, formValues);
  };

  // const createdRedirect = props.created ? <GroupConfirm /> : null;

  let renderForm = <div>Loading ...</div>;

  if (props.event.length > 0)
    renderForm = (
      <div>
        <h2>Make Reservation</h2>
        <h4>
          {props.event[0].eventName} -{" "}
          {new Date(props.event[0].date).toLocaleDateString("us-en", {
            weekday: "short",
          })}
          {", "}
          {new Date(props.event[0].date).toLocaleString("en-us", {
            dateStyle: "short",
            timeStyle: "short",
          })}
        </h4>

        <ReserveForm onSubmit={onSubmit} event={props.event[0]} auth={props.isSignedIn} />
      </div>
    );

  return (
    <div>
      {/* {createdRedirect} */}
      {(!props.created) ? renderForm : <GroupConfirm group={props.group.dbGroup} event={props.event} /> }
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    event: state.event.events.filter(
      (event) => event._id === ownProps.match.params.id),
    created: state.group.created,
    group: state.group.group,
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(mapStateToProps, {
  fetchEvent,
  createGroup,
  startCreateGroup,
})(EventReserve);
