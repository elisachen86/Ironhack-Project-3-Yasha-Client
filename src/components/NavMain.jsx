import React from "react";
import { NavLink } from "react-router-dom";
import { withUser } from "../components/Auth/withUser";
import apiHandler from "../api/apiHandler";

import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import "../styles/NavMain.css";

const useStyles = makeStyles((theme) => ({
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

  console.log(context);

  return (
    <nav className="NavMain">
      <NavLink exact to={context.isLoggedIn ? "/dashboard" : "/"}>
        <h3 className="logo">YASHA</h3>
      </NavLink>
      <ul className="nav-list">
        {context.isLoggedIn && (
          <React.Fragment>
            <Grid container justify="center">
              <Grid>
                <Button color="primary">
                  <SearchIcon></SearchIcon>
                </Button>
              </Grid>
              <Grid>
                <Button color="primary">
                  <NotificationsIcon></NotificationsIcon>
                </Button>
              </Grid>
              <Grid>
                <Button
                  aria-controls="simple-menu"
                  aria-haspopup="true"
                  onClick={handleClick}
                >
                  {/* {context.user && ( */}
                  <Avatar
                    alt={context.user.firstName}
                    src={context.user.avatar}
                    className={classes.small}
                  ></Avatar>
                  {/* )} */}
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
            <li>
              <NavLink to="/signin">Log in</NavLink>
            </li>
            {/* <li>
              <NavLink to="/signup">Create account</NavLink>
            </li> */}
          </React.Fragment>
        )}
      </ul>
    </nav>
  );
};

export default withUser(NavMain);
