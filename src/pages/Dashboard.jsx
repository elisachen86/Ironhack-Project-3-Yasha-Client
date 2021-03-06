// Corresponding Figma view: "Home" one.
// For the desktop version: the notifications and filters will appear on the side (when activated?/clicked on)

import React, { Component } from "react";
import { Link } from "react-router-dom";

import { withUser } from "../components/Auth/withUser";
import apiHandler from "../api/apiHandler";
import Stepper from "../components/Stepper";
// import CardDashboard from "../components/CardDashboard";
import CardDashboardNotif from "../components/CardDashboardNotif";
import FloatingButton from "../components/FloatingButton";
import CardFilters from "../components/CardFilters";
import Chart from "../components/Chart";

import Typography from "@material-ui/core/Typography";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import Grid from "@material-ui/core/Grid";

class Dashboard extends Component {
  state = {
    orders: null,
    ordersBySector: null,
  };

  async componentDidMount() {
    const data = await apiHandler.getAllOrders();

    // console.log(data);
    function groupBySector(arg) {
      const sortedData = data.reduce((acc, obj) => {
        obj.total = obj.items.reduce(
          (acc, item) => (acc += item.price * item.quantity),
          0
        );

        let key = obj[arg];
        if (!acc[key]) {
          acc[key] = [];
        }
        acc[key].push(obj);
        return acc;
      }, {});

      const result = Object.keys(sortedData).map((key) => [
        key,
        sortedData[key],
      ]);
      return result;
    }

    function groupBySteps(arg) {
      const statusCheck = {
        submitted: 0,
        shipped: 0,
        received: 0,
      };

      arg.forEach((arr) => {
        const currentStep = arr.steps[arr.steps.length - 1].stage;
        if (currentStep === "submitted")
          statusCheck.submitted = statusCheck.submitted + 1;
        else if (currentStep === "shipped")
          statusCheck.shipped = statusCheck.shipped + 1;
        else if (currentStep === "received")
          statusCheck.received = statusCheck.received + 1;
      });

      return statusCheck;
    }

    this.setState({
      orders: data,
      ordersBySector: groupBySector("season"),
      ordersBySteps: groupBySteps(data),
    });
  }

  render() {
    const { context } = this.props;
    // console.log('here at dashboard', [...this.state.orders].filter((arr) => arr.comments.length > 0))

    if (!this.state.ordersBySector) {
      return <div>Loading.....</div>;
    }

    // console.log("render", this.state.ordersBySector);

    return (
      <div className="dashboard-container">
        <div className="dashboard-fullrow">
          <Typography variant="h3" component="h1">
            Hello <strong>{context.user && context.user.firstName} </strong>!
          </Typography>
        </div>
        <div className="dashboard-left">
          <Typography variant="h5" color="textSecondary" gutterBottom>
            Notifications
          </Typography>

          <div className="dashboard-notifs">
            <CardDashboardNotif
              text1="4 orders need your attention"
              text2="3 confirmation issues and 1 transport to organize"
              text3="3 new messages"
              text4="from Danone, Coca-Cola, Mondelez"
              ordersWithMessages={[...this.state.orders].filter(
                (arr) => arr.comments.length > 0
              )}
            ></CardDashboardNotif>
          </div>

          <div className="dashboard-budget">
            <Typography variant="h5" color="textSecondary" gutterBottom>
              Your open-to-buy
            </Typography>
            <Chart></Chart>
          </div>
        </div>
        <div className="dashboard-right">
          <Grid item>
            <Grid item>
              <Typography variant="h5" color="textSecondary" gutterBottom>
                Your orders
              </Typography>
            </Grid>

            <Grid item>
              <Typography variant="subtitle1" gutterBottom>
                <p>
                  All open orders
                  <span>{this.state.orders.length}</span>
                  <span>
                    <ArrowDropDownIcon />
                  </span>
                </p>
                {/* TBC : comp the arrow overlay of the orders by sectors */}
              </Typography>
            </Grid>
          </Grid>

          <Stepper steps={this.state.ordersBySteps}></Stepper>

          <CardFilters orders={this.state.orders}></CardFilters>

          <div className="dashboard-scrollbox">
            {/* <CardDashboard
              category="Middle East"
              orders="34"
              total="414"
            ></CardDashboard>
            <CardDashboard
              category="Europe"
              orders="32"
              total="350"
            ></CardDashboard>
            <CardDashboard
              category="Asia"
              orders="17"
              total="110"
            ></CardDashboard>
            <CardDashboard
              category="North America"
              orders="51"
              total="682"
            ></CardDashboard> */}

            {/* <Link to={{
                          pathname: `/dashboard/categories/${arr[0]}`,
                          state: {ordersBySector: true }
                        }} >   */}

            {/* {this.state.ordersBySector.map((arr, index) => (
              <Link
                to={{
                  pathname: `/dashboard/categories/${index}`,
                  state: { ordersBySector: this.state.ordersBySector[index] },
                }}
              >
                <CardDashboard
                  key={index}
                  category={arr[0]}
                  orders={arr[1].length}
                  total={arr[1].reduce(
                    (accumulator, currentValue) =>
                      (accumulator += currentValue.total),
                    0
                  )}
                ></CardDashboard>
              </Link>
            ))} */}
          </div>

          <Link to="/order/new">
            <FloatingButton></FloatingButton>
          </Link>
        </div>
      </div>
    );
  }
}

export default withUser(Dashboard);
