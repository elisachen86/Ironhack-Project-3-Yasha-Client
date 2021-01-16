// Corresponding Figma view: "Home" one.
// For the desktop version: the notifications and filters will appear on the side (when activated?/clicked on)

import React, { Component } from "react";
import Stepper from "../components/Stepper";
import CardDashboard from "../components/CardDashboard";
import { withUser } from "../components/Auth/withUser";
import apiHandler from "../api/apiHandler";


import Typography from "@material-ui/core/Typography";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Grid from '@material-ui/core/Grid';




class Dashboard extends Component {

  state = {
    orders: null,
    ordersBySector: null
  }

  // async componentDidMount() {
   componentDidMount() {


    // const data = await apiHandler.getAllOrders()

    const data = [
      {
        season: "y16",
        items: [
          {price: 1, quantity: 40},
          {price: 3, quantity: 90},
          {price: 5, quantity: 100},
        ]
      }, 
      {
        season: "y16",
        items: [
          {price: 4, quantity: 20},
          {price: 3, quantity: 90},
          {price: 5, quantity: 70},
        ]
      }, 
      {
        season: "y16",
        items: [
          {price: 6, quantity: 20},
          {price: 3, quantity: 90},
          {price: 5, quantity: 50},
        ]
      }, 
      {
        season: "y17",
        items: [
          {price: 9, quantity: 20},
          {price: 6, quantity: 90},
          {price: 5, quantity: 50},
        ]
      }, 
      {
        season: "y17",
        items: [
          {price: 5, quantity: 20},
          {price: 2, quantity: 90},
          {price: 5, quantity: 200},
        ]
      }, 
      {
        season: "y17",
        items: [
          {price: 5, quantity: 20},
          {price: 9, quantity: 90},
          {price: 5, quantity: 400},
        ]
      }, 
      {
        season: "y18",
        items: [
          {price: 10, quantity: 20},
          {price: 28, quantity: 90},
          {price: 5, quantity: 200},
        ]
      }, 
      {
        season: "y18",
        items: [
          {price: 5, quantity: 20},
          {price: 30, quantity: 90},
          {price: 40, quantity: 400},
        ]
      }, 
    ]
    console.log(data)

    // const seasonsNames = [...new Set(data.map(order => order.season))]
    // console.log("seasons name", seasonsNames)

  //   const separateOrder = data.reduce((acc, order) =>{
  //         const price = order.items.reduce((acc, item) => acc += item.price * item.quantity , 0)
  //         return acc[order.season] 
  //         ? [...acc[order.season], price] 
  //         : acc[order.season] = [price]
  // }, {})
      
      
      function groupBySector(arg){
        
        const sortedData = data.reduce((acc, obj) => {

                obj.total = obj.items.reduce((acc, item) => acc += item.price * item.quantity , 0)

                let key = obj[arg]
                if (!acc[key]) {acc[key] = []}
                acc[key].push(obj)
                return acc
              }, {}) 
          
            const result = Object.keys(sortedData).map((key) => [key, sortedData[key]]);
            return result
      }


      this.setState({ orders: data, ordersBySector: groupBySector("season")})
  }


  render() {

    const { context } = this.props;


    if (!this.state.ordersBySector) {
      return <div>Loading.....</div>;
    }

    console.log(this.state.ordersBySector)

    return (
      <div>
        
        <Typography variant="h3" component="h1"><p>Hello  {context.user && context.user.firstName}</p> </Typography>

        <Typography variant="subtitle1" gutterBottom>Today</Typography>

        
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
        {/* <h3>
          All open seasons <span>{this.state.orders.length}</span> orders<i class="fas fa-sort-down"></i>
        </h3> */}



            <Grid container spacing={3}>

              <Grid item xs={12} sm={6}>
                    <Typography variant="subtitle1" gutterBottom>
                    <p>Your orders</p>
                    </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                    <Typography variant="subtitle1" gutterBottom>
                    <p>All open orders 
                    <span>{this.state.orders.length}</span> 
                    <span> <ArrowDropDownIcon /></span></p>
                    {/* TBC : comp the arrow overlay of the orders by sectors */}
                    </Typography>
              </Grid>
 
            </Grid>

        
       

        <Stepper></Stepper>


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


        {this.state.ordersBySector.map((arr) => 
                    <CardDashboard
                    category={arr[0]}
                    orders={arr[1].length}
                    total={arr[1].reduce((accumulator, currentValue) => accumulator += currentValue.total, 0)}
                  ></CardDashboard>
        )}
        

      </div>
    );
  }
}


export default withUser(Dashboard)