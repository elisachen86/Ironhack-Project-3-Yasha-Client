import React from "react";

import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import WarningIcon from "@material-ui/icons/Warning";
import MessageIcon from "@material-ui/icons/Message";

const CardDashboardNotif = (props) => {
  return (
    <div>
      <Card className="card">
        <Grid container alignItems="center" spacing={2}>
          <Grid item>
            <WarningIcon></WarningIcon>
          </Grid>
          <Grid item>
            <Typography variant="h5">{props.text1}</Typography>
            <Typography color="textSecondary">{props.text2} </Typography>
          </Grid>
        </Grid>
      </Card>
      <Card className="card">
        <Grid container alignItems="center" spacing={2}>
          <Grid item>
            <MessageIcon></MessageIcon>
          </Grid>
          <Grid item>
            <Typography variant="h5">{props.text3}</Typography>
            <Typography color="textSecondary">{props.text4} </Typography>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
};

export default CardDashboardNotif;
