import React from "react";
// eslint-disable-next-line
import Button from "@material-ui/core/Button";
import NavSecond from "../components/NavSecond";
import Stepper from "../components/Stepper";
import CardOrder from "../components/CardOrder";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const BrandRetailer = () => {
  return (
    <div>
      <NavSecond text="Danone"></NavSecond>
      <div className="catBrandContainer">
        <Grid container justify="center">
          {/* <Button variant="contained">Filters</Button> */}
          <Typography variant="h5">
            <strong>34 </strong>orders worth <strong>18.000</strong>
          </Typography>
          <Stepper></Stepper>
        </Grid>
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
    </div>
  );
};

export default BrandRetailer;
