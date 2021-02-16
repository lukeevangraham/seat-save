import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { CSVLink, CSVDownload } from "react-csv";
import { fetchPopulatedEvent, deleteGroup } from "../../store/actions/index";

import ShowGroups from "../../components/ShowGroups/ShowGroups";

const Reservations = (props) => {
  useEffect(() => {
    props.fetchPopulatedEvent(props.match.params.id);
  }, [props.fetchEvent]);

  let renderShowGroups = <div>Loading...</div>;

  if (props.event[0]) {
    if (props.event[0].groups) {
      const stripped = props.event[0].groups.map((group) =>
        (({ groupName, email, groupSize }) => ({
          groupName,
          email,
          groupSize,
        }))(group)
      );
      renderShowGroups = (
        <>
          <ShowGroups event={props.event} delete={props.deleteGroup} />
          <br />
          <CSVLink
            style={{ marginTop: "1rem", marginBottom: "20px" }}
            data={stripped}
          >
            Export As CSV
          </CSVLink>
          <br />
          <br />
          <br />
        </>
      );
    }
  }

  return (
    <div>
      <h2>Reservations</h2>
      {renderShowGroups}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    event: state.event.events,
  };
};

export default connect(mapStateToProps, { fetchPopulatedEvent, deleteGroup })(
  Reservations
);
