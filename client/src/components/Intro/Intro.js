import React from "react";
import { connect } from "react-redux";
import SignupForm from "./SignupForm/SignupForm";
import { createChurch } from "../../store/actions";

// let renderForm = <div>Loading...</div>

const Intro = (props) => {
  const onSubmit = (formValues) => {
    props.createChurch(formValues);
  };

  return (
    <>
      <h1>Help people RSVP for your Church Events</h1>
      <div>SeatSave keeps your RSVPs in-order</div>
      <SignupForm onSubmit={onSubmit} />
    </>
  );
};
export default connect(null, { createChurch })(Intro);
