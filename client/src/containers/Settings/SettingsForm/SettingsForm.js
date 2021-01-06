import React from "react";
import { Field, FieldArray, reduxForm } from "redux-form";
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

const renderAdminEmails = ({
  fields,
  meta: { touched, error, submitFailed },
  input
}) => (
  <ul>
    <li>
      <Button variant="contained" onClick={() => fields.push({})}>
        Add Email
      </Button>
      {(touched || submitFailed) && error && <span>{error}</span>}
    </li>
    {console.log("FIELDS: ", fields.getAll())}
    {fields.map((adminEmail, index) => (
      <li key={index}>
        {console.log("EMAIL", adminEmail, index)}
        <Field
          name={`${adminEmail}.adminEmail`}
          type="email"
          component={renderTextField}
          label="Admin Email"
          {...input}
        />
      </li>
    ))}
  </ul>
);

let SettingsForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          name="maxGroupSize"
          component={renderTextField}
          label="Max. Group Size"
          type="number"
          inputProps={{ min: 1 }}
        />
      </div>
      <div>
        <FieldArray name="adminEmail" component={renderAdminEmails} />
      </div>
      {/* <div>
        <Field
          name="adminEmail"
          component={renderTextField}
          type="email"
          label="Admin Email"
        />
      </div> */}
      <div>
        <Field
          name="signupMessage"
          component={renderTextField}
          label="Signup Message"
          style={{ width: "300px" }}
        />
      </div>
      <br />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
};

const validate = (formValues) => {
  const errors = {};
  const requiredFields = ["groupName", "email", "groupSize"];
  requiredFields.forEach((field) => {
    if (!formValues[field]) {
      errors[field] = "Required";
    }
  });
  if (
    formValues.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formValues.email)
  ) {
    errors.email = "Invalid email address";
  }
  return errors;
};

SettingsForm = reduxForm({
  form: "settings",
  validate,
})(SettingsForm);

export default SettingsForm;
