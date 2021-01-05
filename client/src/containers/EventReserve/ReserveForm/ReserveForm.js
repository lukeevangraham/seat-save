import React from "react";
import { Field, formValueSelector, reduxForm } from "redux-form";
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

let ReserveForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          name="groupName"
          component={renderTextField}
          label="Group Name"
        />
      </div>
      <div>
        <Field
          name="email"
          component={renderTextField}
          type="email"
          label="Email"
        />
      </div>
      <div>
        <Field
          name="groupSize"
          component={renderTextField}
          type="number"
          label="How Many People in Your Group?"
          inputProps={{ min: 1 }}
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
  const requiredFields = [
    'groupName',
    'email',
    'groupSize'
  ]
  requiredFields.forEach(field => {
    if (!formValues[field]) {
      errors[field] = 'Required'
    }
  })
  if (formValues.email &&  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formValues.email)) {
    errors.email = 'Invalid email address'
  }
  return errors;
};

ReserveForm = reduxForm({
  form: "reserve",
  validate,
})(ReserveForm);

export default ReserveForm;
