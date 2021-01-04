import React from "react";
import { Field, reduxForm } from "redux-form";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";


const renderTextField = ({
  label,
  input,
  meta: { touched, invalid, error },
  ...custom
}) => (
  <TextField
    label={label}
    placeholder={label}
    error={touched && invalid}
    helperText={touched && error}
    {...input}
    {...custom}
  />
);

const renderDateAndTimeField = ({
  label,
  input,
  meta: { touched, invalid, error },
  ...custom
}) => (
  <TextField
    id="datetime-local"
    label={label}
    type="datetime-local"
    InputLabelProps={{ shrink: true }}
    {...input}
    {...custom}
  />
);

const EventForm = (props) => {
  const { handleSubmit, pristine, reset, submitting, classes } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          name="eventName"
          component={renderTextField}
          label="Event Name"
        />
      </div>
      <br />
      <div>
        <Field
          name="date"
          component={renderDateAndTimeField}
          label="Event Date & Time"
        />
      </div>
      <br />
      <div>
        <Field
          name="openSpots"
          component={renderTextField}
          type="number"
          label="Open Spots"
          inputProps={{ "min": 0 }}
        />
      </div>
      <br />
      <br />
      <Button type="submit" variant="contained" color="secondary">
        Submit
      </Button>
    </form>
  );
};

export default reduxForm({
  form: "event",
})(EventForm);
