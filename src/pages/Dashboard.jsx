// Corresponding Figma view: "Home" one.
// For the desktop version: the notifications and filters will appear on the side (when activated?/clicked on)

import React, { Component } from "react";
import Stepper from "../components/Stepper";
import CardDashboard from "../components/CardDashboard";
import { withUser } from "../components/Auth/withUser";
import apiHandler from "../api/apiHandler";
import Typography from "@material-ui/core/Typography";




class Dashboard extends Component {

  // static contextType = UserContext;


  state = {
    orders: null
  }



  async componentDidMount() {

    const data = await apiHandler.getAllOrders()
    console.log(data)
    this.setState({ orders: data })
    const seasonsNames = [...new Set(data.map(order => order.season))]
    console.log(seasonsNames)
    const separateOrder = data.reduce((acc, order) =>{
      const price = order.items.reduce((acc, item) => acc += item.price * item.quantity , 0)
    return acc[order.season] 
    ? [...acc[order.season], price] 
    : acc[order.season] = [price]
  }, {})
    console.log(seasonsNames.map((season,i)=>({[season]:separateOrder[i]})))
    
  }

  render() {

    console.log(this.props)

    const { context } = this.props;

    if (!this.state.orders) {
      return <div>Loading.....</div>;
    }

    return (
      <div>
        <h1>Hello  {context.user && context.user.firstName}</h1>
        <h2>Today</h2>
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
          All open seasons (91 orders)<i class="fas fa-sort-down"></i>
        </h3>

        <Stepper></Stepper>


        {this.state.orders.map((arr) => (
          <Typography color="textSecondary">
            {arr.category}
          </Typography>
        ))}

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