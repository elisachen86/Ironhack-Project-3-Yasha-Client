import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Stepper from "../components/Stepper";
import NavSecond from "../components/NavSecond";
import CardCategory from "../components/CardCategory";

export default class SeasonGeography extends Component {
  render() {
    return (
      <div>
        <NavSecond text="Middle East"></NavSecond>
        <Button variant="contained">Filters</Button>
        <h1>34 orders worth 18.000</h1>
        <Stepper></Stepper>
        <CardCategory
          geography="Middle East"
          orders="34"
          amount="350"
        ></CardCategory>
        <CardCategory
          geography="Europe"
          orders="50"
          amount="418"
        ></CardCategory>
        <CardCategory geography="Asia" orders="41" amount="387"></CardCategory>
      </div>
    );
  }
}
