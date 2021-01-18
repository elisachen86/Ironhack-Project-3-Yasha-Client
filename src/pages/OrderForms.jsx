import React, { Component } from 'react';
import { FormReceived } from '../components/Forms/FormReceived';
import FormShipped from '../components/Forms/FormShipped'

export default class OrderForms extends Component {

    render() {
       // console.log("this is the data", order);
        return (
            <div>
            {/* { this.props.order.steps[this.props.order.steps.length - 1].stage === "submitted" && */}
                <FormShipped></FormShipped>
            {/* } */}

            {/* {  this.props.order.steps[this.props.order.steps.length - 1].stage === "shipped" && */}
                {/* <FormReceived></FormReceived> */}
            {/* } */}
            </div>
        )
    }
}
