import React from "react";
import Link from "@material-ui/core/Link";
import { Link as RouterLink } from "react-router-dom";
import GoogleAuth from "../../containers/GoogleAuth/GoogleAuth";
import Typography from "@material-ui/core/Typography";

const Layout = (props) => {

    let view = (
      <div>
        <h1>
          <Link component={RouterLink} to="/">
            RB Community Church | Seat Save
          </Link>
        </h1>
        <GoogleAuth />
      </div>
    );

    if (window.location.pathname.startsWith("/embed")) {
      console.log("TRUE")
      console.log("PROPS: ", props.children)
      // view = (<div></div>)
    }


  return (
    <div>
      {view}
      <main>{props.children}</main>
    </div>
  );
};

export default Layout;
