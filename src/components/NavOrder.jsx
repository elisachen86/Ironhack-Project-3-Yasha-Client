import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

const NavOrder = (props) => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <img src="" alt="" />
          <Typography variant="h6">{props.text}</Typography>
          <IconButton>
            <CloseIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavOrder;