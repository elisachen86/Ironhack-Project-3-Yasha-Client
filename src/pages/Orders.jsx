// // Corresponding Figma View for reference: "Area / Middle East"
// ( with Filter button, timeline and listing of all the orders for this area )

import React, { Component } from 'react';

export default class Orders extends Component {
    render() {
        return (
            <div>

                <i class="fas fa-long-arrow-alt-left"></i> <h1>Middle East</h1>
                
                <button><i class="fas fa-filter"></i> Filters</button>

                <p><span>34</span>orders, worth <span>418,280€</span></p>

                {/* Numbers of orders that are in each state (hardcoded for now) */}
                <h4>23</h4>
                <h4>9</h4>
                <h4>2</h4>
                <h4>1</h4>
                <h4>0</h4>
                <h4>0</h4>

                {/* for the timeline, I used one div for the line and others that will be placed on it for the "bullet points" */}
                <div className="line"></div>
                <div className="bullet-points"></div>
                <div className="bullet-points"></div>
                <div className="bullet-points"></div>
                <div className="bullet-points"></div>
                <div className="bullet-points"></div>
                <div className="bullet-points"></div>
                <div className="bullet-points"></div>
                {/* end of timeline. the corresponding status will be placed w/ css */}
                <h4>submitted</h4>
                <h4>confirmed</h4>
                <h4>packed</h4>
                <h4>ready to ship</h4>
                <h4>shipped</h4>
                <h4>received</h4>
                
                <div>
                    <img src="/images/testImgOrder.jpg" alt="Testlogo"/>
                    <h2>S020200001</h2>
                    <p>18,430€ - 482 units</p>
                </div>
                <div>
                    <img src="/images/testImgOrder.jpg" alt="Testlogo"/>
                    <h2>S020200002</h2>
                    <p>18,430€ - 482 units</p>
                </div>
            </div>
        )
    }
}
