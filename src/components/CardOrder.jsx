import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const cardOrder = (props) => {
  return (
    <Card className="card">
      <CardContent>
        {/* <Typography color="textSecondary" gutterBottom>
          Image
        </Typography> */}
        <Typography variant="h5" component="h2">
          {props.orderNumber}
        </Typography>
        <Typography color="textSecondary">
          ${props.amount} - {props.units} units
        </Typography>
      </CardContent>
      <CardActions>{/* <Button size="small">See more</Button> */}</CardActions>
    </Card>
  );
};

export default cardOrder;
