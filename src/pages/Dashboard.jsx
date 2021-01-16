// Corresponding Figma view: "Home" one.
// For the desktop version: the notifications and filters will appear on the side (when activated?/clicked on)

import React, { Component } from "react";
import Stepper from "../components/Stepper";
import CardDashboard from "../components/CardDashboard";
import { withUser } from "../components/Auth/withUser";
import apiHandler from "../api/apiHandler";
import Typography from "@material-ui/core/Typography";



class Dashboard extends Component {

  state = {
    orders: null
  }

  async componentDidMount() {

    const data = await apiHandler.getAllOrders()
    console.log(data)
    const seasonsNames = [...new Set(data.map(order => order.season))]
    console.log(seasonsNames)
    const separateOrder = data.reduce((acc, order) =>{
          const price = order.items.reduce((acc, item) => acc += item.price * item.quantity , 0)
          return acc[order.season] 
          ? [...acc[order.season], price] 
          : acc[order.season] = [price]
  }, {})
      console.log(separateOrder)
      const seasonsNamesAndTotal = seasonsNames.map((season,i)=>({[season]:separateOrder[i]}))
      console.log(seasonsNamesAndTotal)

      this.setState({ orders: data })
      // , lists: seasonsNames, totals: separateOrder

  }


  render() {

    const { context } = this.props;


    if (!this.state.orders) {
      return <div>Loading.....</div>;
    }

    return (
      <div>
        
        <Typography variant="h4" component="h1"><p>Hello  {context.user && context.user.firstName}</p> </Typography>

        <Typography variant="subtitle1" gutterBottom><p>Today</p> </Typography>

        {/* <h2>Today</h2> */}
        
        <Typography variant="subtitle1" gutterBottom><p>Today</p> </Typography>

        
        <div>
          <i class="fas fa-exclamation-triangle"></i>
          <h3>4 orders need your attention</h3>
          <p>3 confirmation issues and 1 transport to organize</p>
        </div>
        <div>
          <i class="far fa-envelope"></i>
          <h3>4 orders need your attention</h3>
          <p>3 confirmation issues and 1 transport to organize</p>
        </div>
        <h2>Your sales orders</h2>
        <h3>
          All open seasons <span>{this.state.orders.length}</span> orders<i class="fas fa-sort-down"></i>
        </h3>
        
        <Stepper></Stepper>


        {/* {this.getOrdersTotalBySector.map((arr) => (
          <Typography color="textSecondary" key={arr._id}>
            {arr._id}
          </Typography>
        ))} */}

        <CardDashboard
          category="Middle East"
          orders="34"
          total="414"
        ></CardDashboard>
        <CardDashboard
          category="Europe"
          orders="32"
          total="350"
        ></CardDashboard>
        <CardDashboard category="Asia" orders="17" total="110"></CardDashboard>
        <CardDashboard
          category="North America"
          orders="51"
          total="682"
        ></CardDashboard>
      </div>
    );
  }
}


export default withUser(Dashboard)