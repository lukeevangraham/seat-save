import React from "react";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const eventTable = (props) => (
  <TableContainer component={Paper}>
    <Table aria-label="event table">
      <TableHead>
        <TableRow>
          <TableCell>Event</TableCell>
          <TableCell align="right">Day</TableCell>
          <TableCell align="right">Date</TableCell>
          <TableCell align="right">Time</TableCell>
          <TableCell align="right">Open Spots</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {props.events.map((event) => (
          <TableRow key={event.eventName}>
            <TableCell component="th" scope="row">
              <Link
                component={RouterLink}
                to={
                  props.admin
                    ? `/reservations/${event._id}`
                    : `/reserve/${event._id}`
                }
              >
                {event.eventName}
              </Link>
            </TableCell>
            <TableCell align="right">
              {new Date(event.date).toLocaleDateString("us-en", {
                weekday: "short",
              })}
            </TableCell>
            <TableCell align="right">
              {new Date(event.date).toLocaleDateString()}
            </TableCell>
            <TableCell align="right">
              {new Date(event.date).toLocaleTimeString([], {
                timeStyle: "short",
              })}
            </TableCell>
            <TableCell align="right">{event.openSpots}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default eventTable;
