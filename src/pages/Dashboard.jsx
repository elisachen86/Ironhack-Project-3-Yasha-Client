// Corresponding Figma view: "Home" one.
// For the desktop version: the notifications and filters will appear on the side (when activated?/clicked on)

import React, { Component } from "react";
import Stepper from "../components/Stepper";
import CardDashboard from "../components/CardDashboard";

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
        <h3>
          All open seasons (91 orders)<i class="fas fa-sort-down"></i>
        </h3>

        <Stepper></Stepper>

        <CardDashboard
          category="Middle East"
          orders="34"
          total="414"
        ></CardDashboard>
        <CardDashboard
          category="Europe"
          orders="32"
          total="350"
        ></CardDashboard>
        <CardDashboard category="Asia" orders="17" total="110"></CardDashboard>
        <CardDashboard
          category="North America"
          orders="51"
          total="682"
        ></CardDashboard>
      </div>
    );
  }
}
