import React, { Component } from "react";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import HourglassEmptyIcon from "@material-ui/icons/HourglassEmpty";
import DescriptionIcon from "@material-ui/icons/Description";
import CheckSharpIcon from "@material-ui/icons/CheckSharp";

// IMPORTS REQUIRED FOR THE POPOVER
import Box from "@material-ui/core/Box";
import Popover from "@material-ui/core/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import Loading from "./Loading";
import Check from "@material-ui/icons/Check";

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

export default class CardOrderStatus extends Component {
  state = {};

  componentDidMount = () => {
    this.setState({
      order: this.props.order,
    });
  };

  calculateTotalCost = () => {
    const totalCost = this.props.order[0].items.reduce(
      (acc, item) => (acc += item.price * item.quantity),
      0
    );
    return totalCost;
  };

  calculateTotalQty = () => {
    const totalQty = this.props.order[0].items.reduce(
      (acc, item) => (acc += item.quantity),
      0
    );
    return totalQty;
  };

  render() {
    console.log("cardOrderStatus - props", this.props.order); // object

    return this.props.order ? (
      <Card>
        <CardContent>
          <Typography color="textSecondary">
            ${this.calculateTotalCost()}
          </Typography>

          <Typography color="textSecondary">
            {this.calculateTotalQty()} units
          </Typography>
          <Typography variant="h5" component="h2">
            <HourglassEmptyIcon></HourglassEmptyIcon>
            {
              this.props.order[0].steps[this.props.order[0].steps.length - 1]
                .stage
            }{" "}
            on{" "}
            {dayjs(
              `${
                this.props.order[0].steps[this.props.order[0].steps.length - 1]
                  .date
              }`
            )
              .locale("en")
              .format("LLLL")}
            {/* dddd Do YYYY kk mm Z or LLLL | toNow et tz.guess() for the timezone dont work*/}
          </Typography>
          <Typography color="textSecondary">
            <DescriptionIcon></DescriptionIcon>Terms and Conditions
          </Typography>
        </CardContent>

        <CardActions>
          <PopupState variant="popover" popupId="demo-popup-popover">
            {(popupState) => (
              <div>
                <Button {...bindTrigger(popupState)}>Not paid</Button>
                <Popover
                  {...bindPopover(popupState)}
                  anchorOrigin={{
                    vertical: "center",
                    horizontal: "center",
                  }}
                  transformOrigin={{
                    vertical: "center",
                    horizontal: "center",
                  }}
                >
                  <Box p={2}>
                    <Typography>Order History</Typography>
                    <Typography>
                      {" "}
                      <CheckSharpIcon></CheckSharpIcon>
                      Submitted on{" "}
                      {dayjs(`${this.props.order[0].steps[0].date}`).format(
                        "dddd Do YYYY kk mm"
                      )}
                      '{" "}
                    </Typography>
                    {this.props.order[0].steps[1] ? (
                      <Typography>
                        {" "}
                        <CheckSharpIcon></CheckSharpIcon>
                        Shipment confirmed on{" "}
                        {dayjs(`${this.props.order[0].steps[1].date}`).format(
                          "dddd Do YYYY kk mm"
                        )}
                        '{" "}
                      </Typography>
                    ) : (
                      <Typography>
                        {" "}
                        <HourglassEmptyIcon></HourglassEmptyIcon>
                        Your order has not been shipped yet
                      </Typography>
                    )}

                    {this.props.order[0].steps[2] ? (
                      <Typography>
                        {" "}
                        <CheckSharpIcon></CheckSharpIcon>
                        Received on{" "}
                        {dayjs(`${this.props.order[0].steps[2].date}`).format(
                          "dddd Do YYYY kk mm"
                        )}
                        '{" "}
                      </Typography>
                    ) : (
                      <Typography>
                        {" "}
                        <HourglassEmptyIcon></HourglassEmptyIcon>
                        You have not received your order yet
                      </Typography>
                    )}
                  </Box>
                </Popover>
              </div>
            )}
          </PopupState>
        </CardActions>
      </Card>
    ) : (
      <Loading></Loading>
    );
  }
}
