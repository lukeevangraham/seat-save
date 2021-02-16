import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import Paper from "@material-ui/core/Paper";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
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

const ShowGroups = (props) => {
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

  const deleteAndCloseModal = (id, groupSize) => {
    props.delete(id, groupSize, props.event[0]._id);
    handleClose();
  };

  const handleOpen = (action, id, name, groupSize) => {
    if (action === "del") {
      setModalTitle("Delete Group");
      setModalContent(
        `Are you sure you want to delete this group named: ${name}`
      );
      setModalActions(
        <div>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => deleteAndCloseModal(id, groupSize)}
          >
            Delete
          </Button>
          <Button
            style={{ marginLeft: "1rem" }}
            variant="contained"
            onClick={handleClose}
          >
            Cancel
          </Button>
        </div>
      );
    }
    modalSetOpen(true);
  };

  const handleClose = () => {
    modalSetOpen(false);
  };

  return (
    <div>
      <Modal
        open={modalOpen}
        onClose={handleClose}
        aria-labelledby="delete-group-confirmation"
        aria-describedby="delete-group-confirm"
      >
        {modalBody}
      </Modal>
      <h3>
        Groups for: {props.event[0].eventName} -{" "}
        {new Date(props.event[0].date).toLocaleString()}
      </h3>
      <h4>
        {props.event[0].groups
          .map((group) => group.groupSize)
          .reduce((prev, next) => prev + next)}{" "}
        Reservations
      </h4>
      <TableContainer component={Paper}>
        <Table aria-label="group table">
          <TableHead>
            <TableRow>
              <TableCell>Group</TableCell>
              <TableCell align="right">Quantity</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Note</TableCell>
              <TableCell align="right">Edit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.event[0].groups.map((group) => (
              <TableRow key={group._id}>
                <TableCell component="th" scope="row">
                  {group.groupName}
                </TableCell>
                <TableCell align="right">{group.groupSize}</TableCell>
                <TableCell align="right">{group.email}</TableCell>
                <TableCell align="right">{group.note}</TableCell>
                <TableCell align="right">
                  <Link
                    component={RouterLink}
                    to={`/reservations/edit/${group._id}`}
                    color="textPrimary"
                  >
                    <EditIcon fontSize="small" />
                  </Link>
                  <Link component={RouterLink} to="#" color="textPrimary">
                    <DeleteIcon
                      style={{ marginLeft: 5 }}
                      fontSize="small"
                      onClick={() =>
                        handleOpen(
                          "del",
                          group._id,
                          group.groupName,
                          group.groupSize
                        )
                      }
                    />
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ShowGroups;
