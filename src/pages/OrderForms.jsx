import React, { Component } from 'react';
import apiHandler from "../api/apiHandler";
import { withRouter } from "react-router-dom";

import { FormReceived } from '../components/Forms/FormReceived';
import FormShipped from '../components/Forms/FormShipped';
import Typography from "@material-ui/core/Typography";
import Loading from '../components/Loading';

class OrderForms extends Component {

    // Help from Vincent 19/01: to resolve any problem of asynchronicity
    // We had to lift the state up from the children (FormShipped, FormReceived)
    // To the parent (OrderForms)    
    state = {
    orders : null
  };

   async componentDidMount() {
     const data = await apiHandler.getOneOrder(this.props.match.params.id)
     this.setState({
       orders: data
     })
     
  }

   handleChange = (event) => {
    const value = event.target.value;
    const key = event.target.name;

    this.setState({ [key]: value });
        }
    
   handleSubmit = (event) => {
    event.preventDefault();

        apiHandler
        .updateOneOrder(this.props.match.params.id)
        .then((data) => {
            apiHandler.getOneOrder(this.props.match.params.id);
            this.props.history.push(`/order/${this.props.match.params.id}`);
            })
        .catch((error) => {
            console.log(error);
            });
        };


    render() {
       // console.log("Order Forms - data", this.state.orders && this.state.orders[0].steps[this.state.orders[0].steps.length-1].stage);

        return this.state.orders !== null ? (
            <div>
            { this.state.orders[0].steps[this.state.orders[0].steps.length-1].stage === "submitted" &&
                <FormShipped 
                orders={ this.state.orders } 
                handleChange={ this.handleChange}
                handleSubmit={this.handleSubmit}
                ></FormShipped>
            }

            {  this.state.orders[0].steps[this.state.orders[0].steps.length - 1].stage === "shipped" &&
                <FormReceived 
                orders={ this.state.orders }
                handleChange={ this.handleChange}
                handleSubmit={this.handleSubmit}
                ></FormReceived>
            }

            {  this.state.orders[0].steps[this.state.orders[0].steps.length - 1].stage === "received" &&
            <Typography component="h1" variant="h5">
                Order completed
            </Typography>
            }
            </div>
            ) : (
                    <Loading></Loading>
        );
    }
}

export default withRouter(OrderForms);