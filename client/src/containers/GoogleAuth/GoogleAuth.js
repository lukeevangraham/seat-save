import React, { useState, useEffect } from "react";
import { Redirect, Link as RouterLink } from "react-router-dom";
import { connect } from "react-redux";
import Link from "@material-ui/core/Link";
import { signIn, signOut } from "../../store/actions";
import Button from "@material-ui/core/Button";
import SettingsIcon from "@material-ui/icons/Settings";

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "666797596660-g0ss4568pfnjesar12r2n0irheeg92n1.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();

          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      const profile = this.auth.currentUser.get().getBasicProfile();
      this.props.signIn(profile);
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <div style={{ display: "flex" }}>
          {/* <Link color="default" variant="inherit" to={"/event-create"} component={RouterLink}> */}
            <Button component={RouterLink} to="/event-create" color="inherit">Create Event</Button>
          {/* </Link> */}

          {/* <Link to={"/settings"} component={RouterLink}> */}
          <Button color="inherit" component={RouterLink} to="/settings">
            <SettingsIcon />

          </Button>
          {/* </Link> */}

          <div onClick={this.onSignOutClick}>
            <Button color="inherit">Sign Out</Button>
          </div>
        </div>
      );
    } else {
      return (
        <div onClick={this.onSignInClick}>
          <Button color="inherit">Admin</Button>
        </div>
      );
    }
  }

  adminRedirect = this.props.isAdmin ? <Redirect to="/admin" /> : null;

  render() {
    return (
      <div>
        {this.adminRedirect}
        {this.renderAuthButton()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
    // isAdmin: state.auth.userId.adminOf.length > 0,
  };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
