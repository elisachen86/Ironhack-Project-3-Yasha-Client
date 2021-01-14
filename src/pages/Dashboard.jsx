// Corresponding Figma view: "Home" one. 
// For the desktop version: the notifications and filters will appear on the side (when activated?/clicked on)

import React, { Component } from 'react';
import Stepper from '../components/Stepper';

export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <h1>Hello Elisa!</h1> 
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
                <h3>All open seasons (91 orders)<i class="fas fa-sort-down"></i></h3>

                <Stepper></Stepper>

                <div>
                    <img src="" alt="Middle East Logo"/>
                    <h5>Middle East</h5>
                </div>
                <div>
                    <img src="" alt="Western Europe Logo"/>
                    <h5>Western Europe</h5>
                </div>
                <div>
                    <img src="" alt="North America Logo"/>
                    <h5>North America</h5>
                </div>
                <div>
                    <img src="" alt="China Logo"/>
                    <h5>China</h5>
                </div>
                <div>
                    <img src="" alt="Asia Pacific Logo"/>
                    <h5>Asia Pacific</h5>
                </div>


            </div>
        )
    }
}
