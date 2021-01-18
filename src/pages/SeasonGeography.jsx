import React, { Component } from "react";
import { withRouter } from "react-router-dom"
import { withUser } from "../components/Auth/withUser";


import Button from "@material-ui/core/Button";
import Stepper from "../components/Stepper";
import NavSecond from "../components/NavSecond";
import CardCategory from "../components/CardCategory";
import FilterListIcon from "@material-ui/icons/FilterList";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const SeasonGeography = (props) => {

  console.log(props)


  console.log(props.location.state.ordersBySector)

  return (
  
    <div>  
    {/* <pre>{JSON.stringify(props, null,2)}</pre> */}
      <NavSecond text="Middle East"></NavSecond>
      <div className="catBrandContainer">
        <Grid container justify="center">
          {/* <Button variant="contained">
          <FilterListIcon></FilterListIcon> Filters
        </Button> */}
          <Typography variant="h5">
            <strong>34 </strong>orders worth <strong>18.000</strong>
          </Typography>
          <Stepper></Stepper>
        </Grid>
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
    </div>
  );
};

export default withRouter(withUser(SeasonGeography));
