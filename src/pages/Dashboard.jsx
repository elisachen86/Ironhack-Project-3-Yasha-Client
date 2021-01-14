// Corresponding Figma view: "Home" one. 
// For the desktop version: the notifications and filters will appear on the side (when activated?/clicked on)

import React, { Component } from 'react';
import NavMain from '../components/NavMain';

export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <NavMain></NavMain>
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

                {/* Numbers of orders that are in each state (hardcoded for now) */}
                <h4>78</h4>
                <h4>12</h4>
                <h4>1</h4>
                <h4></h4>
                <h4></h4>
                <h4></h4>

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
