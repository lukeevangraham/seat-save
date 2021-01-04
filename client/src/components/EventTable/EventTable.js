import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import Modal from "@material-ui/core/Modal";
import Link from "@material-ui/core/Link";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  paper: {
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const eventTable = (props) => {
  const classes = useStyles();
  const [modalOpen, modalSetOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState("");
  const [modalActions, setModalActions] = useState("");

  let modalBody = (
    <div className={classes.paper}>
      <h2>{modalTitle}</h2>
      <p>{modalContent}</p>
      <div>{modalActions}</div>
    </div>
  );

  const deleteAndCloseModal = (id) => {
    props.delete(id)
    handleClose();
  }

  const handleOpen = (action, id, name) => {
    if (action === "del") {
      setModalTitle("Delete Event");
      setModalContent(
        `Are you sure you want to delete this event named: ${name}`
      );
      setModalActions(
        <div>
          <Button variant="contained" color="secondary" onClick={() => deleteAndCloseModal(id)}>
            Delete
          </Button>{"  "}
          <Button variant="contained" onClick={handleClose}>Cancel</Button>
        </div>
      );
    }
    modalSetOpen(true);
  };

  const handleClose = () => {
    modalSetOpen(false);
  };

  return (
    <TableContainer component={Paper}>
      <Modal
        open={modalOpen}
        onClose={handleClose}
        aria-labelledby="delete-event-confirmation"
        aria-describedby="delete-event-confirm"
      >
        {modalBody}
      </Modal>
      <Table aria-label="event table">
        <TableHead>
          <TableRow>
            <TableCell>Event</TableCell>
            <TableCell align="right">Day</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Time</TableCell>
            <TableCell align="right">Open Spots</TableCell>
            {props.isAuth ? <TableCell align="right">Admin</TableCell> : null}
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
              {props.isAuth ? (
                <TableCell align="right">
                  {" "}
                  <EditIcon fontSize="small" />{" "}
                  <Link component={RouterLink} to="#" color="TextPrimary">
                  <DeleteIcon
                    fontSize="small"
                    onClick={() =>
                      handleOpen("del", event._id, event.eventName)
                    }
                  />
                  </Link>
                </TableCell>
              ) : null}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default eventTable;
