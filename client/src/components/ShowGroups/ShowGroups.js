import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const ShowGroups = (props) => (
  <div>
    <h3>Groups for: {props.event[0].eventName} - { new Date(props.event[0].date).toLocaleString()}</h3>
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
                        <TableCell component="th" scope="row">{group.groupName}</TableCell>
                        <TableCell align="right">{group.groupSize}</TableCell>
                        <TableCell align="right">{group.email}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
  </div>
);

export default ShowGroups;
