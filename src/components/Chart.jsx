import React, { Component } from "react";
import { Pie, Doughnut } from "react-chartjs-2";

const state = {
  labels: ["Budget left", "Spent"],
  datasets: [
    {
      label: "FW20",
      backgroundColor: ["#64323E", "#DAABB0"],
      hoverBackgroundColor: ["#64323E", "#DAABB0"],
      data: [73, 485],
    },
  ],
};

export default class Chart extends Component {
  render() {
    return (
      <div>
        <Pie
          data={state}
          options={{
            title: {
              display: true,
              text: "FW20",
              fontSize: 20,
            },
            legend: {
              display: false,
              position: "right",
            },
          }}
        />

        {/* <Doughnut
          data={state}
          options={{
            title: {
              display: true,
              text: "Average Rainfall per month",
              fontSize: 20,
            },
            legend: {
              display: true,
              position: "right",
            },
          }}
        /> */}
      </div>
    );
  }
}
