import React from "react";
import Button from "@material-ui/core/Button";
import NavSecond from "../components/NavSecond";
import Stepper from "../components/Stepper";
import CardOrder from "../components/CardOrder";

const BrandRetailer = () => {
  return (
    <div>
      <NavSecond text="Danone"></NavSecond>
      <Button variant="contained">Filters</Button>
      <h1>34 orders worth 18.000</h1>
      <Stepper></Stepper>
      <CardOrder
        orderNumber="PO1039829"
        amount="5,829.00"
        units="423"
      ></CardOrder>
      <CardOrder
        orderNumber="PO1039828"
        amount="13,592.00"
        units="876"
      ></CardOrder>
      <CardOrder
        orderNumber="PO1039827"
        amount="5,998.00"
        units="502"
      ></CardOrder>
    </div>
  );
};

export default BrandRetailer;
