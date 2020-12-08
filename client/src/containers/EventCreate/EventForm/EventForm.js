import React from "react";
import { Field, reduxForm } from "redux-form";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Input } from "@material-ui/core";
// import DatePicker from "./DatePicker/DatePicker";
import { DatePicker } from "redux-form-material-ui";

let EventForm = (props) => {
  const renderTextField = (field) => (
    <TextField
      label={field.label}
      // floatingLabelText={field.input.label}
      // errorText={field.touched && field.error}
      {...field.input}
    />
  );

  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name="eventName"
          component={renderTextField}
          label="Event Name"
        />
      </div>
      <br />
      <div>
        {/* <Field name="date" component={DatePicker} type="date" /> */}
        <Field
          name="date"
          component={DatePicker}
          format={null}
          hintText="What day is the event?"
        />
      </div>
      <div>
        <label htmlFor="openSpots">Open Spots</label>
        <Field name="openSpots" component="input" type="number" />
      </div>
      <Button type="submit" variant="contained" color="secondary">
        Submit
      </Button>
    </form>
  );
};

export default reduxForm({
  form: "event",
})(EventForm);
