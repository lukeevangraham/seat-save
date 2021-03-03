import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Field, formValueSelector, reduxForm } from "redux-form";
import Link from "@material-ui/core/Link";
import FormLabel from "@material-ui/core/FormLabel";
import Checkbox from "@material-ui/core/Checkbox";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import FormHelperText from "@material-ui/core/FormHelperText";
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

const renderCheckboxField = ({
  label,
  input,
  meta: { touched, invalid, error },
  ...custom
}) => (
  <FormControl error={touched && invalid} component="fieldset">
    {console.log("ERR: ", error)}
    <FormGroup>
      <FormControlLabel
        control={
          <Checkbox
            checked={input.value ? true : false}
            onChange={input.onChange}
            {...custom}
            {...input}
          />
        }
        label={label}
      />
    </FormGroup>
    <FormHelperText>{touched && error}</FormHelperText>
  </FormControl>
);

let SignupForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div style={{ marginTop: "1rem" }}>
        <Field
          name="churchName"
          component={renderTextField}
          label="Church Name"
          style={{ width: "500px" }}
        />
      </div>
      <div>
        <Field
          name="adminEmail"
          component={renderTextField}
          type="email"
          label="Administrator Email"
          style={{ width: "500px" }}
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
  const requiredFields = ["churchName", "adminEmail"];
  requiredFields.forEach((field) => {
    if (!formValues[field]) {
      errors[field] = "Required";
    }
  });
  if (
    formValues.adminEmail &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formValues.adminEmail)
  ) {
    errors.adminEmail = "Invalid email address";
  }
  return errors;
};

SignupForm = reduxForm({
  form: "createChurch",
  validate,
})(SignupForm);

export default SignupForm;
