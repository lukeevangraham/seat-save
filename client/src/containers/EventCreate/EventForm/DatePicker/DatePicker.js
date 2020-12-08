import React from "react";
import TextField from "@material-ui/core/TextField";

const DatePicker = ({ input, label, meta: { touched, error }, ...custom }) => (
  <TextField
    onChange={(e, val) => {
      return input.onChange(val);
    }}
    id="datetime-local"
    label="Next appointment"
    type="datetime-local"
    defaultValue="2017-05-24T10:30"
    InputLabelProps={{
      shrink: true,
    }}
    // value={input.value}
  />
);

export default DatePicker;
