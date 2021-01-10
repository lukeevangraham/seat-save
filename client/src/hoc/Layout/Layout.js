import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import { Link as RouterLink } from "react-router-dom";
import GoogleAuth from "../../containers/GoogleAuth/GoogleAuth";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: "2rem"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Layout = (props) => {
  const classes = useStyles();

  let view = (
    // <>
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" className={classes.title}>
            <Link component={RouterLink} style={{ color: "#fff", textDecoration: "none" }} to="/">
              <strong>SeatSave</strong> | RB Community Church
            </Link>
          </Typography>
          {/* <Button color="inherit">Login</Button> */}
          <GoogleAuth />
        </Toolbar>
      </AppBar>
    </div>
    //   <div>
    //     <h1>
    //       <Link component={RouterLink} to="/">
    //         RB Community Church | Seat Save
    //       </Link>
    //     </h1>
    //   </div>
    // </>
  );

  if (window.location.pathname.startsWith("/embed")) {
    view = <div></div>;
  }

  return (
    <>
      {view}
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
