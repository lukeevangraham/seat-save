import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import PrintIcon from "@material-ui/icons/Print"
import CloseIcon from "@material-ui/icons/Close"

const GroupConfirm = (props) => (
  <div>
    <h3>Reservation Confirmation</h3>
    {console.log("GROUP: ", props.group, props.event)}
    <div>
      <strong>Group Name: </strong>
      {props.group.groupName} <br />
      <strong>Group Size: </strong>
      {props.group.groupSize} <br />
      <strong>Email: </strong>
      {props.group.email} <br />
      <strong>Event Name: </strong>
      {props.event.eventName} <br />
      <strong>Event Date: </strong>
      {new Date(props.event.date).toLocaleDateString("en-us")} <br />
      <strong>Event Time: </strong>
      {new Date(props.event.date).toLocaleTimeString("en-us", {
        timeStyle: "short",
      })}{" "}
      <br />
      <br />
      <strong>
        Time Reservation Made:{" "}
        {new Date().toLocaleString("en-us", {
          dateStyle: "short",
          timeStyle: "short",
        })}
      </strong>
      <br />
      <br />
      <hr />
      <br />
      <div>The above details have been sent to you.</div>
      <br />
      <Button variant="contained" color="primary" onClick={() => window.print()}><PrintIcon />Print</Button>
      {"  "}
      <Link to="/"><Button variant="contained" color="primary"><CloseIcon />Close</Button></Link>
    </div>
  </div>
);

export default GroupConfirm;
