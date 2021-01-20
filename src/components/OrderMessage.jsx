import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";

const OrderMessage = (props) => {
  // console.log(props)
  const singleMsg = props.messages

  return (
    
    <Card>
      <Avatar src={singleMsg.user.avatar} alt={singleMsg.user.firstName}></Avatar>
      <CardContent>

        <Typography color="textPrimary" gutterBottom>
          {singleMsg.user.firstName} {" "} {singleMsg.user.lastName}
        </Typography>

        <Typography color="textPrimary" gutterBottom>
            {singleMsg.timeStamp}
        </Typography>

        <Typography color="textPrimary" gutterBottom>
            {singleMsg.message}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default OrderMessage;
