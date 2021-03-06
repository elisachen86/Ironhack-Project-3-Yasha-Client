import React from "react";
import { withRouter } from "react-router-dom"
import { withUser } from "../components/Auth/withUser";
import { Link } from "react-router-dom"


// eslint-disable-next-line
import Button from "@material-ui/core/Button";
import Stepper from "../components/Stepper";
import NavSecond from "../components/NavSecond";
import CardCategory from "../components/CardCategory";
// eslint-disable-next-line
import FilterListIcon from "@material-ui/icons/FilterList";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";



const SeasonGeography = (props) => {


  const { ordersBySector } = props.location.state

  // console.log(ordersBySector)


  function groupBySteps(arg) {
    const statusCheck = {
      submitted: 0,
      shipped: 0,
      received: 0,
    };

    arg.forEach((arr) => {
      const currentStep = arr.steps[arr.steps.length - 1].stage;
      if (currentStep === "submitted")
        statusCheck.submitted = statusCheck.submitted + 1;
      else if (currentStep === "shipped")
        statusCheck.shipped = statusCheck.shipped + 1;
      else if (currentStep === "received")
        statusCheck.received = statusCheck.received + 1;
    });

    return statusCheck;
  }

  return (
  
    <div>  
    {/* <pre>{JSON.stringify(props, null,2)}</pre> */}
    <Link to='/dashboard'> 
    <NavSecond text={ordersBySector[0]}></NavSecond>
    </Link>
     
      <div className="catBrandContainer">
        <Grid container justify="center">
          {/* <Button variant="contained">
          <FilterListIcon></FilterListIcon> Filters
        </Button> */}
          <Typography variant="h5">
            <strong>  {ordersBySector[1].length} </strong>
            orders worth <strong>{ordersBySector[1].reduce((acc, currentValue) => acc += currentValue.total, 0 )}</strong>
          </Typography>


          <Stepper steps={groupBySteps(ordersBySector[1])}></Stepper>
        </Grid>


        {/* <CardCategory
          geography="Middle East"
          orders="34"
          amount="350"
        ></CardCategory>
        <CardCategory
          geography="Europe"
          orders="50"
          amount="418"
        ></CardCategory>
        <CardCategory geography="Asia" orders="41" amount="387"></CardCategory> */}

        {/* <Link to={{
                          pathname: `/dashboard/categories/${index}`,
                          state: {ordersBySector: this.state.ordersBySector[index] }
                        }} >  
                         */}


             {ordersBySector[1].map((arr, index) => (
              <Link to={`/order/${arr._id}`} >                                  
              <CardCategory

                key={index}
                refcode={arr.number}
                total={arr.total}
                amount={arr.items.reduce(
                  (accumulator, currentValue) =>
                    (accumulator += currentValue.quantity),
                  0
                )}
              ></CardCategory>
              
              </Link>
            ))}     

      </div>
    </div>
  );
};

export default withRouter(withUser(SeasonGeography));
