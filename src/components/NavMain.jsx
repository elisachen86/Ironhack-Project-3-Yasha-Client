import React from "react";
import { NavLink } from "react-router-dom";
import { withUser } from "../components/Auth/withUser";
import apiHandler from "../api/apiHandler";

import AppBar from "@material-ui/core/AppBar";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import { makeStyles } from "@material-ui/core/styles";

import "../styles/NavMain.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(0),
      // position: "fixed",
      // minWidth: "0px",
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
}));

const NavMain = (props) => {
  const classes = useStyles();

  const { context } = props;

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  function handleLogout() {
    apiHandler
      .logout()
      .then(() => {
        context.removeUser();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // console.log(context);

  return (
    <AppBar position="static">
      <Grid container alignItems="center" justify="space-between" id="navbar">
        <Grid item>
          <NavLink exact to={context.isLoggedIn ? "/dashboard" : "/"}>
            <Typography variant="h6">
              <strong>YASHA</strong>
            </Typography>
          </NavLink>
        </Grid>
        <Grid item>
          {context.isLoggedIn && (
            <React.Fragment>
              <Grid container justify="center" className={classes.root}>
                <Grid>
                  <Button color="secondary">
                    <SearchIcon></SearchIcon>
                  </Button>
                </Grid>
                <Grid>
                  <Button color="secondary">
                    <NotificationsIcon></NotificationsIcon>
                  </Button>
                </Grid>
                <Grid>
                  <Button
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    size="small"
                    onClick={handleClick}
                  >
                    {context.user && (
                      <Avatar
                        alt={context.user.firstName}
                        src={context.user.avatar}
                        className={classes.small}
                      ></Avatar>
                    )}
                  </Button>
                  <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={handleClose}>
                      <Link href="/profile">My user profile</Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <Link href="/company">My company profile</Link>
                    </MenuItem>
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                  </Menu>
                </Grid>
              </Grid>
            </React.Fragment>
          )}
          {!context.isLoggedIn && (
            <React.Fragment>
              <Grid item>
                <Button href="/signin" color="inherit">
                  Log in / Sign up
                </Button>
              </Grid>
              {/* <li>
              <NavLink to="/signup">Create account</NavLink>
            </li> */}
            </React.Fragment>
          )}
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default withUser(NavMain);
