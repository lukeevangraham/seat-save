import React from "react";
import { Link as RouterLink } from "react-router-dom";
import SimpleModal from "../UI/Modal/Modal"
import Link from "@material-ui/core/Link";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import EditIcon from "@material-ui/icons/Edit"
import DeleteIcon from "@material-ui/icons/Delete"

const eventTable = (props) => (
  <TableContainer component={Paper}>
    {console.log("PROPS: ", props)}
    <Table aria-label="event table">
      <TableHead>
        <TableRow>
          <TableCell>Event</TableCell>
          <TableCell align="right">Day</TableCell>
          <TableCell align="right">Date</TableCell>
          <TableCell align="right">Time</TableCell>
          <TableCell align="right">Open Spots</TableCell>
          {props.isAuth ? <TableCell align="right">Admin</TableCell> : null }
        </TableRow>
      </TableHead>
      <TableBody>
        {props.events.map((event) => (
          <TableRow key={event._id}>
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
            {/* {props.isAuth ? <TableCell align="right"> <EditIcon fontSize="small" /> <DeleteIcon onClick={() => props.delete(event._id)} fontSize="small" /> </TableCell> : null } */}
            {props.isAuth ? <TableCell align="right"> <EditIcon fontSize="small" /> <Link component={RouterLink} to={`/events/delete/${event._id}`}><DeleteIcon fontSize="small" /></Link> </TableCell> : null }
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default eventTable;
