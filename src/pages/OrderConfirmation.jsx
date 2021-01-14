// Corresponding Figma View: "Order confirmation parsed"

import React, { Component } from 'react';
import NavMain from '../components/NavMain';

export default class OrderConfirmation extends Component {
    render() {
        return (
            <div>
                <NavMain></NavMain>
                <i class="fas fa-long-arrow-alt-left"></i> <h1>Order confirmation</h1>

                {/* Table for summing up the order */}
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Initial order</th>
                            <th>Order confirmation</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Order: </td>
                            <td>BALR FW20</td>
                            <td>SOBAL00021</td>
                        </tr>
                        <tr>
                            <td>Supplier: </td>
                            <td>BALR</td>
                            <td><i class="far fa-check-circle"></i></td>
                        </tr>
                        <tr>
                            <td>Currency: </td>
                            <td>USD</td>
                            <td><i class="fas fa-exclamation-triangle"></i> EUR</td>
                        </tr>
                        <tr>
                            <td>Date: </td>
                            <td>12/05/2020</td>
                            <td><i class="far fa-check-circle"></i> 23/06/2020</td>
                        </tr>
                    </tbody>
                </table>

                {/* Below: order content */}
                <h1>Order Content</h1>
                    {/* this div will be used for the "pink line of separation" */}
                <div></div>
                <h2>1 item removed</h2>
                <h2>1 item added</h2>
                <h2>1 quantity changed</h2>
                    {/* this div will be used for the "pink line of separation" */}
                <div></div>

            <a href="">Export details</a>

            <button>Accept order confirmation</button>

            <a href="">Cancel upload</a>      
        </div>
        )
    }
}
