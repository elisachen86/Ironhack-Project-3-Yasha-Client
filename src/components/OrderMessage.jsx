import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";

// PLUGINS REQUIRED TO FORMAT THE DATE
const dayjs = require("dayjs");
require("dayjs/locale/en");
var advancedFormat = require("dayjs/plugin/advancedFormat");
var LocalizedFormat = require("dayjs/plugin/localizedFormat");
var utc = require("dayjs/plugin/utc");
var timezone = require("dayjs/plugin/timezone");
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(advancedFormat);
dayjs.extend(LocalizedFormat);

var relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime);

const OrderMessage = (props) => {
  // console.log(props)
  const singleMsg = props.messages;

  return (
    <Card>
      <Avatar
        src={singleMsg.user.avatar}
        alt={singleMsg.user.firstName}
      ></Avatar>
      <CardContent>
        <Typography color="textPrimary" gutterBottom>
          {singleMsg.user.firstName} {singleMsg.user.lastName}
        </Typography>

        <Typography color="textPrimary" gutterBottom>
          {dayjs(`${singleMsg.timeStamp}`).format("DD/MM/YYYY")}
        </Typography>

        <Typography color="textPrimary" gutterBottom>
          {singleMsg.message}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default OrderMessage;
