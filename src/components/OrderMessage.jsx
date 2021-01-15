import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";

const OrderMessage = () => {
  return (
    <Card>
      <Avatar></Avatar>
      <CardContent>
        <Typography color="textPrimary" gutterBottom>
          Julie D.
        </Typography>
        <Typography color="textPrimary" gutterBottom>
          yesterday at 17h32
        </Typography>
        <Typography color="textPrimary" gutterBottom>
          this is the message
        </Typography>
      </CardContent>
    </Card>
  );
};

export default OrderMessage;
