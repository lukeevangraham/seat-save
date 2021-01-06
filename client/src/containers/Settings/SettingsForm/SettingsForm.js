import React from "react";
import { Field, FieldArray, reduxForm } from "redux-form";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import EmailIcon from "@material-ui/icons/Email";


const removeArrayItem = (id) => {
  console.log("ID: ", id);
};

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
  input,
}) => (
  <List style={{ maxWidth: 360, marginTop: "27px", marginBottom: "27px" }}>
    {fields.map((adminEmail, index) => (
      <li key={index} style={{ display: "flex", alignItems: "flex-end" }}>
        <Field
          style={{ width: "80%", marginBottom: ".5rem" }}
          name={`${adminEmail}.adminEmail`}
          type="email"
          component={renderTextField}
          label="Admin Email"
          {...input}
        />
        <Button
          style={{
            width: "5%",
            padding: 0,
            minWidth: 25,
            marginBottom: ".5rem",
          }}
          variant="contained"
          color="secondary"
          onClick={() => fields.remove(index)}
        >
          X
        </Button>
      </li>
    ))}

    <Button variant="contained" onClick={() => fields.push({})}>
      Add Admin Email
    </Button>
    {(touched || submitFailed) && error && <span>{error}</span>}
  </List>
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
          style={{ width: "100%" }}
          multiline
          rows={13}
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
