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
    // console.log("cardOrderStatus - props", this.props.order); // object

    const currentOrder = this.props.order[0];

    return this.props.order ? (
      <Card>
        <PopupState variant="popover" popupId="demo-popup-popover">
          {(popupState) => (
            <div>
              <CardContent {...bindTrigger(popupState)}>
                <Typography color="textSecondary">
                  ${this.calculateTotalCost()}
                </Typography>

                <Typography color="textSecondary">
                  {this.calculateTotalQty()} units
                </Typography>
                <Typography variant="h5" component="h2">
                  <HourglassEmptyIcon></HourglassEmptyIcon>
                  {
                    this.props.order[0].steps[
                      this.props.order[0].steps.length - 1
                    ].stage
                  }{" "}
                  on{" "}
                  {dayjs(
                    `${
                      this.props.order[0].steps[
                        this.props.order[0].steps.length - 1
                      ].date
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

        <CardActions>
          <PopupState variant="popover" popupId="demo-popup-popover">
            {(popupState) => (
              <div>
                <Button {...bindTrigger(popupState)}>
                  {currentOrder.paymentHistory.length === undefined &&
                    "Not paid"}
                  {currentOrder.paymentHistory.length === 1 && "Not paid"}
                  {currentOrder.paymentHistory.length === 2 &&
                    "First payment completed"}
                  {currentOrder.paymentHistory.length === 3 && "Fully paid"}
                </Button>

                {/* {currentOrder.paymentHistory.length === undefined && <Button {...bindTrigger(popupState)}>NOT PAID</Button>}
                {currentOrder.paymentHistory.length === 1 && <Button {...bindTrigger(popupState)}>NOT PAID</Button>}
                {currentOrder.paymentHistory.length === 2 && <Button {...bindTrigger(popupState)}>PARTIALLY PARID</Button>}
                {currentOrder.paymentHistory.length === 2 && <Button {...bindTrigger(popupState)}>FULLY PAID</Button>} */}

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
                    <Typography>Payment terms</Typography>
                    <Typography>
                      {" "}
                      <CheckSharpIcon></CheckSharpIcon>
                      first payment:
                      {(currentOrder.paymentTerms.firstPaymentAmount *
                        this.calculateTotalCost()) /
                        100}
                      ${" |"}
                      second payment:
                      {(currentOrder.paymentTerms.secondPaymentAmount *
                        this.calculateTotalCost()) /
                        100}
                      ${" "}
                    </Typography>

                    <Typography>Payment history</Typography>

                    {currentOrder.paymentHistory.length === undefined && (
                      <Typography>
                        Haven' paied anything yet, start your first payment
                      </Typography>
                    )}

                    {currentOrder.paymentHistory.length === 1 && (
                      <Typography>
                        Haven' paied anything yet, start your first payment{" "}
                      </Typography>
                    )}

                    {currentOrder.paymentHistory.length > 1 && (
                      <Typography>
                        <CheckSharpIcon></CheckSharpIcon>
                        First payment is made on the date :{" "}
                        {dayjs(
                          `${currentOrder.paymentHistory[1].date}`
                        ).fromNow()}{" "}
                        {"("}{" "}
                        {dayjs(`${currentOrder.paymentHistory[1].date}`).format(
                          "DD/MM/YYYY"
                        )}
                        {")"}
                      </Typography>
                    )}

                    {currentOrder.paymentHistory.length > 2 && (
                      <Typography>
                        <CheckSharpIcon></CheckSharpIcon>
                        This order is fully paid on the date :{" "}
                        {dayjs(
                          `${currentOrder.paymentHistory[2].date}`
                        ).fromNow()}{" "}
                        {"("}{" "}
                        {dayjs(`${currentOrder.paymentHistory[2].date}`).format(
                          "DD/MM/YYYY"
                        )}
                        {")"}
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
