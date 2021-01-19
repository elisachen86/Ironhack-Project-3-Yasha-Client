import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';
import '../styles/dashboard.css';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      margin: "70px",
      position: "absolute",
      top: 0,
      right: 0,
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function FloatingActionButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Fab 
      variant="extended"
      size="medium"
      >
        <NavigationIcon className={classes.extendedIcon} />
        Add a new order
      </Fab>
    </div>
  );
}