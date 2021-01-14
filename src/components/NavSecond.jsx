import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const NavSecond = (props) => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton>
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6">{props.text}</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavSecond;
