import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Stepper from "../components/Stepper";
import NavSecond from "../components/NavSecond";
import CategoryCard from "../components/CategoryCard";

export default class SeasonGeography extends Component {
  render() {
    return (
      <div>
        <NavSecond text="Middle East"></NavSecond>
        <Button variant="contained">Filters</Button>
        <h1>34 orders worth 18.000</h1>
        <Stepper></Stepper>
        <CategoryCard
          geography="Middle East"
          orders="34"
          amount="350"
        ></CategoryCard>
        <CategoryCard
          geography="Europe"
          orders="50"
          amount="418"
        ></CategoryCard>
        <CategoryCard geography="Asia" orders="41" amount="387"></CategoryCard>
      </div>
    );
  }
}
