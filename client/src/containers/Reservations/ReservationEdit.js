import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import ReserveForm from "../EventReserve/ReserveForm/ReserveForm";
import { connect } from "react-redux";
import { editGroup, startCreateGroup } from "../../store/actions/index";

const ReservationEdit = (props) => {
  useEffect(() => {
    return () => props.startCreateGroup();
  }, [])

  const onSubmit = (formValues) => {
    // Calculate change in available seats for the event
    const oldGroupSize = props.group[0].groupSize;
    const newGroupSize = formValues.groupSize;
    const difference = oldGroupSize - newGroupSize;

    formValues.eventId = props.eventId;
    formValues.sizeDifference = difference;
    props.editGroup(props.match.params.id, formValues);
  };

  const createdRedirect = props.created ? <Redirect to="/" /> : null;

  return (
    <div>
      {createdRedirect}
      <h2>Reservation Edit</h2>
      <ReserveForm
        initialValues={props.group[0]}
        auth={props.isSignedIn}
        onSubmit={onSubmit}
        event={props.event}
      />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    group: state.event.events[0].groups.filter(
      (group) => group._id === ownProps.match.params.id
    ),
    isSignedIn: state.auth.isSignedIn,
    eventId: state.event.events[0]._id,
    created: state.group.created,
    event: state.event.events[0]
  };
};

export default connect(mapStateToProps, { startCreateGroup, editGroup })(ReservationEdit);
