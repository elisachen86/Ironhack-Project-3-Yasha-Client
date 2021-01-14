import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import HourglassEmptyIcon from "@material-ui/icons/HourglassEmpty";
import DescriptionIcon from "@material-ui/icons/Description";

export default class CardOrderStatus extends Component {
  render() {
    return (
      <Card>
        <CardContent>
          <Typography color="textSecondary">$18,292.00</Typography>
          <Typography color="textSecondary">
            492 units / 164 SKUs / 91 styles
          </Typography>
          <Typography variant="h5" component="h2">
            <HourglassEmptyIcon></HourglassEmptyIcon>Submitted 5 days ago
          </Typography>
          <Typography color="textSecondary">
            <DescriptionIcon></DescriptionIcon>Terms and Conditions
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained">Not paid</Button>
        </CardActions>
      </Card>
    );
  }
}
