import { PromiseProvider } from "mongoose";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import SimpleModal from "../../components/UI/Modal/Modal";
import Button from "@material-ui/core/Button"
import { fetchEvent, deleteEvent } from "../../store/actions";

const EventDelete = (props) => {
  useEffect(() => {
    props.fetchEvent(props.match.params.id)
  }, []);

  const renderContent = () => "Are you sure you want to delete this event?"

  const renderActions = (props) => (
    <React.Fragment>
      <Button variant="contained" color="secondary">DELETE</Button>
    </React.Fragment>
  )

  return (
    <SimpleModal title={`Delete ${props.event.eventName}`} content={renderContent()} />
  );
};

const mapStateToProps = (state, ownProps) => {
  return { event: state.event.events }
}

export default connect(mapStateToProps, { fetchEvent, deleteEvent })(EventDelete);
