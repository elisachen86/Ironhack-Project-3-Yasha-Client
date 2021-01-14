// Corresponding figma view: Overlay Actions Required . Full page in mobile version but can be a part of 
// the dashboard in desktop one to take full advantage of the space

import React, { Component } from 'react'

export default class ActionsNotifications extends Component {
    render() {
        return (
            <div>
                <h1>Actions required</h1>
                <h2>Actions</h2>
                {/* BELOW: Hardcoded for now but will be obvs. dynamic | needed: orderNumber and status of said order */}
                <div>
                    <img src="/images/testImgOrder.jpg" alt="ImageOrder"/>
                    <h3> SO200000012 </h3>
                    <p><i class="fas fa-exclamation-triangle"></i> Shipment ready </p>
                </div>
            </div>
        )
    }
}
