// Corresponding Figma Views for reference : "Brand / Armani Exchange" "Retailer / American Rag Dubai"
// What appears will depend on the UserType (Brand, Buyer)
// a thought: content could instead be put in components for better readability?

import React, { Component } from 'react';

export default class OrderDetail extends Component {
    render() {
        return (
            <div>

                <i class="fas fa-long-arrow-alt-left"></i> <h1>Maison Plisson</h1>
                
                <button><i class="fas fa-filter"></i> Filters</button>

                <p><span>3</span>orders, worth <span>48,280€</span></p>


                <div>submitted</div>
                <div>
                    <img src="/images/testImgOrder.jpg" alt="Testlogo"/>
                    <h2>S020200001</h2>
                    <p>18,430€ - 482 units</p>
                </div>

                <div>confirmed</div>
                <div>
                        <img src="/images/testImgOrder.jpg" alt="Testlogo"/>
                        <h2>S020200002</h2>
                        <p>18,430€ - 482 units</p>
                    </div>
            </div>
        )
    }
}
