// Figma view called OverlayFilters. It the mobile version, it is supposed to be a separate page but in the desktop one can be put aside

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CardAllOrdersDash from "./CardAllOrdersDash";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    // flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
    },
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

  const classes = useStyles();
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

  return (
    <div>
      <div className={classes.root}>
        <Typography variant="h5" display="block">
          <strong>Filters</strong>
        </Typography>
        <br />
        <Typography variant="h6" component="h1">
          Seasons
        </Typography>

        <div>
          <button
            value="Jan 2020"
            onClick={handleClickSeason}
            //   onDelete={handleDelete}
            style={{
              color: "#DAABB0",
              fontWeight: "400",
              backgroundColor: "transparent",
              border: "1px solid #DAABB0",
              borderRadius: "15px",
              padding: "0 1em 0 1em",
            }}
          >
            Jan 2020
          </button>
          <button
            value="Dec 2020"
            onClick={handleClickSeason}
            //   onDelete={handleDelete}
            style={{
              color: "#DAABB0",
              fontWeight: "400",
              backgroundColor: "transparent",
              border: "1px solid #DAABB0",
              borderRadius: "15px",
              padding: "0 1em 0 1em",
            }}
          >
            Dec 2020
          </button>
        </div>

        <Typography variant="h6" component="h1">
          Categories
        </Typography>

        <div>
          <button
            value="Veggie"
            onClick={handleClickCat}
            //   onDelete={handleDelete}
            style={{
              color: "#DAABB0",
              fontWeight: "400",
              backgroundColor: "transparent",
              border: "1px solid #DAABB0",
              borderRadius: "15px",
              padding: "0 1em 0 1em",
            }}
          >
            Veggie
          </button>
          <button
            value="Cheese"
            onClick={handleClickCat}
            //   onDelete={handleDelete}
            style={{
              color: "#DAABB0",
              fontWeight: "400",
              backgroundColor: "transparent",
              border: "1px solid #DAABB0",
              borderRadius: "15px",
              padding: "0 1em 0 1em",
            }}
          >
            Cheese
          </button>
          <button
            value="Drinks"
            onClick={handleClickCat}
            //   onDelete={handleDelete}
            style={{
              color: "#DAABB0",
              fontWeight: "400",
              backgroundColor: "transparent",
              border: "1px solid #DAABB0",
              borderRadius: "15px",
              padding: "0 1em 0 1em",
            }}
          >
            Drinks
          </button>
        </div>

        <Typography variant="h6" component="h1">
          Order status
        </Typography>

        <div>
          <button
            value="submitted"
            onClick={handleClickOrder}
            //   onDelete={handleDelete}
            style={{
              color: "#DAABB0",
              fontWeight: "400",
              backgroundColor: "transparent",
              border: "1px solid #DAABB0",
              borderRadius: "15px",
              padding: "0 1em 0 1em",
            }}
          >
            submitted
          </button>
          <button
            value="shipped"
            onClick={handleClickOrder}
            //   onDelete={handleDelete}
            style={{
              color: "#DAABB0",
              fontWeight: "400",
              backgroundColor: "transparent",
              border: "1px solid #DAABB0",
              borderRadius: "15px",
              padding: "0 1em 0 1em",
            }}
          >
            shipped
          </button>
          <button
            value="received"
            onClick={handleClickOrder}
            //   onDelete={handleDelete}
            style={{
              color: "#DAABB0",
              fontWeight: "400",
              backgroundColor: "transparent",
              border: "1px solid #DAABB0",
              borderRadius: "15px",
              padding: "0 1em 0 1em",
            }}
          >
            received
          </button>
        </div>

        <Typography variant="h6" component="h1">
          Payment status
        </Typography>

        <div>
          <button
            value="not paid"
            onClick={handleClickPayment}
            //   onDelete={handleDelete}
            style={{
              color: "#DAABB0",
              fontWeight: "400",
              backgroundColor: "transparent",
              border: "1px solid #DAABB0",
              borderRadius: "15px",
              padding: "0 1em 0 1em",
            }}
          >
            not paid
          </button>
          <button
            value="partially paid"
            onClick={handleClickPayment}
            //   onDelete={handleDelete}
            style={{
              color: "#DAABB0",
              fontWeight: "400",
              backgroundColor: "transparent",
              border: "1px solid #DAABB0",
              borderRadius: "15px",
              padding: "0 1em 0 1em",
            }}
          >
            partially paid
          </button>
          <button
            value="fully paid"
            onClick={handleClickPayment}
            //   onDelete={handleDelete}
            style={{
              color: "#DAABB0",
              fontWeight: "400",
              backgroundColor: "transparent",
              border: "1px solid #DAABB0",
              borderRadius: "15px",
              padding: "0 1em 0 1em",
            }}
          >
            fully paid
          </button>
        </div>
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
