import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const CardDashboard = (props) => {
  return (
    <Card>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          Image
        </Typography>
        <Typography variant="h5" component="h2">
          {props.category}
        </Typography>
        <Typography color="textSecondary">
          {props.orders} orders - ${props.total}k
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardDashboard;
