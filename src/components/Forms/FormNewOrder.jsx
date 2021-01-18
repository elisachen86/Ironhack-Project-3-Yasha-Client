// Corresponding Figma View: "New order sheet parsed"

import React, { Component } from 'react';
import apiHandler from '../../api/apiHandler';
import { UserContext } from "../Auth/UserContext";

export default class NewOrder extends Component {

    static contextType = UserContext;

    state = {
     users : [],
     steps: [
         {
             stage : "submitted",
             date: new Date()
     }]
   
    };

    // componentDidMount = () => {
    //     this.setState({
    //         users : this.context.user
    //     })
    // }
  
    handleChange = (event) => {
      const value = event.target.value;
      const key = event.target.name;
  
      this.setState({ [key]: value });
     
    }

    handleSubmit = (event) => {
      event.preventDefault();
      this.state.users.push(this.context.user._id)

      apiHandler
        .createOneOrder(this.state)
        .then((data) => {
            this.props.history.push("/order/" + data._id)
        })
        .catch((error) => {
          console.log(error);
        });

        
    };

    render() {
        // console.log("CONTEXTTYPE", this.context.user._id);
        
        return (
            <div>
                <i class="fas fa-long-arrow-alt-left"></i> <h1>New Order</h1>

                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="">Order name:</label>
                    <input onChange={this.handleChange} name="name" type="text" placeholder="BALR FW20"/>

                    <label htmlFor="">Order number:</label>
                    <input onChange={this.handleChange} name="number" type="text" placeholder="PO168451"/>

                    {/* <label htmlFor="">Retailer company: </label> */}
                    {/* <input onChange={this.handleChange} name="retailerCompany" type="text" placeholder="Maison Plisson"/> */}

                    <label htmlFor="">Currency: </label>
                    <input onChange={this.handleChange} name="currency" type="text" placeholder="EUR"/>

                    <label htmlFor="">Date</label>
                    <input onChange={this.handleChange} name="date" type="Date" placeholder="20/06/2020"/>

                    <label htmlFor="">Season</label>
                    <input onChange={this.handleChange} name="season" type="text" placeholder="FW20"/>

                    <label htmlFor="">Category</label>
                    <input onChange={this.handleChange} name="category" type="text" placeholder="Pasta"/>

                    <button>Submit New order</button>
                    {/* note: this button will be placed at the end of the screen (cf. figma) w/ css */}
                </form>


                <table>
                    <thead>
                        <tr>
                            <th>Item Code</th>
                            <th>Price</th>
                            <th>Qty</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>B10375</td>
                            <td>39.58</td>
                            <td>30</td>
                            <td>5 x 1kg, 10 x 500g</td>
                        </tr>
                    </tbody>
                </table>

                <div>10 items, 50 SKUs</div>
                <div>224 pcs</div>

                <div>Total buy: 9,625 USD</div>

                
            </div>
        )
    }
}
