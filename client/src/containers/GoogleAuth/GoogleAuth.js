import React, { useState, useEffect } from "react";
import { Redirect, Link as RouterLink } from "react-router-dom";
import { connect } from "react-redux";
import Link from "@material-ui/core/Link";
import { signIn, signOut } from "../../store/actions";

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
        <React.Fragment>
          <ul>
            <li>
              <Link to={"/event-create"} component={RouterLink}>
                Create Event
              </Link>
            </li>
            <li>
              <div>
                <Link to={"/settings"} component={RouterLink}>
                  Settings
                </Link>
              </div>
            </li>
            <li>
              <div onClick={this.onSignOutClick}>
                <Link to={"#"} component={RouterLink}>
                  Sign Out
                </Link>
              </div>
            </li>
          </ul>
        </React.Fragment>
      );
    } else {
      return (
        <div onClick={this.onSignInClick}>
          <Link to={"#"} component={RouterLink}>
            Admin
          </Link>
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
