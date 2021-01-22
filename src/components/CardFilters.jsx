// Figma view called OverlayFilters. It the mobile version, it is supposed to be a separate page but in the desktop one can be put aside

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CardAllOrdersDash from "./CardAllOrdersDash";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import "../styles/dashboard.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
}));

const useStylesAccordion = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const CardFilters = (props) => {
  const [seasons, setSeasons] = useState([]);
  const [category, setCategory] = useState([]);
  const [orderStatus, setOrderStatus] = useState([]);
  const [paymentStatus, setPaymentStatus] = useState([]);

  // console.log("CardFilters - orders prop", props);

  // >>>>>>> HANDLERS <<<<<<<<<

  //   const handleDelete = () => {
  //     console.info("You clicked the delete icon.");
  //   };

  const handleClickSeason = (event) => {
    // console.info("You clicked the button.");
    console.log(event.target.value);

    const copySeasons = [...seasons];
    const indexbis = copySeasons.indexOf(event.target.value);
    indexbis < 0
      ? copySeasons.push(event.target.value)
      : copySeasons.splice(indexbis, 1);
    setSeasons(copySeasons);
  };

  const handleClickCat = (event) => {
    // console.info("You clicked the button.");

    const copyCategory = [...category];
    const index = copyCategory.indexOf(event.target.value);
    index < 0
      ? copyCategory.push(event.target.value)
      : copyCategory.splice(index, 1);
    setCategory(copyCategory);
  };

  const handleClickOrder = (event) => {
    // console.info("You clicked the button.");

    const copyOrderStatus = [...orderStatus];
    const indexter = copyOrderStatus.indexOf(event.target.value);
    indexter < 0
      ? copyOrderStatus.push(event.target.value)
      : copyOrderStatus.splice(indexter, 1);
    setOrderStatus(copyOrderStatus);
  };

  const handleClickPayment = (event) => {
    // console.info("You clicked the button.");

    const copyPaymentStatus = [...paymentStatus];
    const indexquater = copyPaymentStatus.indexOf(event.target.value);
    indexquater < 0
      ? copyPaymentStatus.push(event.target.value)
      : copyPaymentStatus.splice(indexquater, 1);
    setPaymentStatus(copyPaymentStatus);

    //   handleFilterPayment(event);
  };

  //   console.log("CardFilters - props", props.orders);

  const filterOrderStatus = (order) => {
    if (!orderStatus.length) return true;
    return orderStatus.includes(order.steps[order.steps.length - 1].stage);
  };

  const handleFilterSeason = (order) => {
    if (!seasons.length) return true;
    return seasons.includes(order.season);
  };

  const handleCategory = (order) => {
    if (!category.length) return true;
    return category.includes(order.category);
  };

  const handlePayment = (order) => {
    // console.log(order.paymentHistory.length - 1, "order.paymentHistory");

    if (!paymentStatus.length) return true;
    return paymentStatus.includes(
      order.paymentHistory[order.paymentHistory.length - 1].payment
    );
  };
  // console.log(props.orders, "orders before");
  const filteredOrders = props.orders
    .filter(handlePayment)
    .filter(handleCategory)
    .filter(filterOrderStatus)
    .filter(handleFilterSeason);

  // console.log(filteredOrders, "filter orders");

  const classes = useStyles();
  const classesA = useStylesAccordion();

  return (
    <div>
      <div className={classesA.root} className={classes.root}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="h5" className={classes.heading}>
              <strong>Filters</strong>
            </Typography>
          </AccordionSummary>

          {/* <br /> */}
          <AccordionDetails className="accordion-flex">
            <Typography variant="h6" component="h1">
              Seasons
            </Typography>
            <button
              className="accordion-btn"
              value="Jan 2020"
              onClick={handleClickSeason}
              //   onDelete={handleDelete}
            >
              Jan 2020
            </button>
            <button
              className="accordion-btn"
              value="Dec 2020"
              onClick={handleClickSeason}
              //   onDelete={handleDelete}
            >
              Dec 2020
            </button>

            <Typography variant="h6" component="h1">
              Categories
            </Typography>

            <button
              className="accordion-btn"
              value="Veggie"
              onClick={handleClickCat}
              //   onDelete={handleDelete}
            >
              Veggie
            </button>
            <button
              className="accordion-btn"
              value="Cheese"
              onClick={handleClickCat}
              //   onDelete={handleDelete}
            >
              Cheese
            </button>
            <button
              className="accordion-btn"
              value="Drinks"
              onClick={handleClickCat}
              //   onDelete={handleDelete}
            >
              Drinks
            </button>

            <Typography variant="h6" component="h1">
              Order status
            </Typography>

            <button
              className="accordion-btn"
              value="submitted"
              onClick={handleClickOrder}
              //   onDelete={handleDelete}
            >
              submitted
            </button>
            <button
              className="accordion-btn"
              value="shipped"
              onClick={handleClickOrder}
              //   onDelete={handleDelete}
            >
              shipped
            </button>
            <button
              className="accordion-btn"
              value="received"
              onClick={handleClickOrder}
              //   onDelete={handleDelete}
            >
              received
            </button>

            <Typography variant="h6" component="h1">
              Payment status
            </Typography>

            <button
              className="accordion-btn"
              value="not paid"
              onClick={handleClickPayment}
              //   onDelete={handleDelete}
            >
              not paid
            </button>
            <button
              className="accordion-btn"
              value="partially paid"
              onClick={handleClickPayment}
              //   onDelete={handleDelete}
            >
              partially paid
            </button>
            <button
              className="accordion-btn"
              value="fully paid"
              onClick={handleClickPayment}
              //   onDelete={handleDelete}
            >
              fully paid
            </button>
          </AccordionDetails>
        </Accordion>
      </div>

      <div className="dashboard-scrollbox">
        {filteredOrders.map((order) => {
          return (
            <Link
              to={{
                pathname: `/order/${order._id}`,
              }}
            >
              <CardAllOrdersDash
                key={order._id}
                name={order.name}
                number={order.number}
                total={order.total}
              ></CardAllOrdersDash>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CardFilters;
