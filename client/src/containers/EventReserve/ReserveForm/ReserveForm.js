import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Field, formValueSelector, reduxForm } from "redux-form";
import Link from "@material-ui/core/Link";
import FormLabel from "@material-ui/core/FormLabel"
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
          style={{ width: "300px" }}
        />
      </div>
      <div>
        <Field
          name="groupSize"
          component={renderTextField}
          type="number"
          label="How Many People in Your Group?"
          inputProps={{ min: 1, max: props.maxGroupSize }}
          style={{ width: "300px" }}
        />
      </div>
      {props.auth ? (
        <div>
          <Field name="note" component={renderTextField} label="Note" />
        </div>
      ) : null}
      <br />
      <div style={{ marginTop: "1rem" }}>
        <FormLabel>Please read and check all that apply</FormLabel>
        <br />
        <Field
          name="noSymptoms"
          component={renderCheckboxField}
          label="I do not have any COVID-19 symptoms"
        />
        <Field
          name="noContact"
          component={renderCheckboxField}
          label="I have not been in contact with anyone who has recently contracted the coronavirus"
        />
        <Field
          name="willDistance"
          component={renderCheckboxField}
          label="I will always maintain a minimum 6-feet distance from anyone that I do not live with"
        />
        <Field
          name="willMask"
          component={renderCheckboxField}
          label="I will wear a properly fitting mask over my nose and mouth at all times"
        />
        <Field
          name="noSocial"
          component={renderCheckboxField}
          label="I understand this is a worship opportunity, not a social event, and when ended, I will proceed to my car while wearing my mask"
        />
        <Field
          name="partyResponsible"
          component={renderCheckboxField}
          label="I accept responsibility that all people in my party will follow these guidelines"
        />
      </div>
      <p>{props.signupMessage}</p>
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
      {props.auth && !window.location.pathname.startsWith("/embed") ? (
        <div style={{ marginTop: "2rem", width: "80%", padding: 8 }}>
          {/* <Link component={RouterLink} to={`/embed/reserve/${props.event._id}`}>
            Embeddable form
          </Link> */}
          <div>
            <strong>Form Embed Code:</strong>
          </div>
          <div style={{ backgroundColor: "#eee", padding: 8 }}>
            {/* <pre> */}
            &lt;iframe src="{window.location.origin}/embed/reserve/
            {props.event._id}" title="Event Registration Form" width="100%"
            height="700px" style="padding:30px; border:none;"&gt;&lt;/iframe&gt;
            {/* </pre> */}
          </div>
        </div>
      ) : null}
      {/* <Button style={{ marginLeft: "1rem" }} variant="contained" color="default">
        Cancel
      </Button> */}
    </form>
  );
};

const validate = (formValues) => {
  console.log("VALUES ", formValues);
  const errors = {};
  const requiredFields = [
    "groupName",
    "email",
    "groupSize",
    "noSymptoms",
    "noContact",
    "willDistance",
    "willMask",
    "noSocial",
    "partyResponsible",
  ];
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

ReserveForm = reduxForm({
  form: "reserve",
  validate,
})(ReserveForm);

export default ReserveForm;
