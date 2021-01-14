// Corresponding Figma View: "New order sheet parsed"

import React, { Component } from 'react';

export default class NewOrder extends Component {
    render() {
        return (
            <div>
                <i class="fas fa-long-arrow-alt-left"></i> <h1>New Order</h1>

                <form action="">
                    <label htmlFor="">Order name:</label>
                    <input type="text" placeholder="BALR FW20"/>

                    <label htmlFor="">Client: </label>
                    <input type="text" placeholder="Maison Plisson"/>

                    {/* Currency (will have to be displayed inline with the client input?) */}
                    <input type="text" placeholder="EUR"/>

                    <label htmlFor="">Date</label>
                    <input type="text" placeholder="20/06/2020"/>

                    <label htmlFor="">Season</label>
                    <input type="text" placeholder="FW20"/>

                    <label htmlFor="">Category</label>
                    <input type="text" placeholder="Pasta"/>

                    <button>Validate import</button>
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
