// Corresponding Figma View: "New order sheet parsed"

import React, { Component } from "react";
import apiHandler from "../../api/apiHandler";
import { UserContext } from "../Auth/UserContext";

import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
// import { KeyboardDatePicker } from "@material-ui/pickers";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";

export default class NewOrder extends Component {
  static contextType = UserContext;

  state = {
    users: [],
    steps: [
      {
        stage: "submitted",
        date: new Date(),
      },
    ],
    paymentTerms: {},
    items: [],
  };

  componentDidMount = async () => {
    const { seasonList, categoryList } = await apiHandler.getUserCompanyInfo();
    try {
      this.setState({ seasonList, categoryList });
      console.log(this.state);
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (event) => {
    const value = event.target.value;
    const key = event.target.name;

    this.setState({ [key]: value });
  };

  //   handleChangeItem = (event) => {
  //     const value = event.target.value;
  //     const key = event.target.name;

  //     this.setState({
  //       items: [...this.state.items, { [key]: value }],
  //     });
  //   };

  handleChangePaymentAmount = (event) => {
    const value = event.target.value;
    const key = event.target.name;
    const secondPayment = 100 - value;

    this.setState({
      paymentTerms: { [key]: value, secondPaymentAmount: secondPayment },
    });
  };

  handleChangePayment = (event) => {
    const value = event.target.value;
    const key = event.target.name;

    this.setState({
      paymentTerms: { ...this.state.paymentTerms, [key]: value },
    });
  };

  handleSubmit = (event) => {
    // const itemObj = {
    //   itemName: this.state.itemName,
    //   price: this.state.price,
    //   quantity: this.state.quantity,
    // };
    // this.setState({
    //   items: [...this.state.items, itemObj],
    // });

    event.preventDefault();
    this.state.users.push(this.context.user._id);

    apiHandler
      .createOneOrder(this.state)
      .then((data) => {
        this.props.history.push("/order/" + data._id);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    // console.log("CONTEXTTYPE", this.context.user._id);

    return (
      <Container component="main" maxWidth="md">
        <Typography component="h1" variant="h5">
          Create a New Order
        </Typography>
        <form onSubmit={this.handleSubmit}>
          <Grid container>
            <TextField
              id="name"
              name="name"
              label="Order Name"
              margin="dense"
              fullWidth
              onChange={this.handleChange}
            />
            <TextField
              id="number"
              name="number"
              label="Purchase Order Number"
              margin="dense"
              fullWidth
              onChange={this.handleChange}
            />
            <TextField
              id="brandCompany"
              name="brandCompany"
              label="Seller Company"
              margin="dense"
              fullWidth
              onChange={this.handleChange}
            />

            {/* <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="Date picker inline"
                value={selectedDate}
                onChange={handleDateChange}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            /> */}

            <label htmlFor="">Date</label>
            <input
              onChange={this.handleChange}
              name="date"
              type="Date"
              placeholder="20/06/2020"
            />

            <FormControl fullWidth margin="dense">
              <InputLabel id="season">Season</InputLabel>
              <Select
                labelId="season"
                id="season"
                name="season"
                onChange={this.handleChange}
              >
                {this.state.seasonList &&
                  this.state.seasonList.map((season) => {
                    return <MenuItem value={season}>{season}</MenuItem>;
                  })}
              </Select>
            </FormControl>

            <FormControl fullWidth margin="dense">
              <InputLabel id="category">Category</InputLabel>
              <Select
                labelId="category"
                id="category"
                name="category"
                onChange={this.handleChange}
              >
                {this.state.categoryList &&
                  this.state.categoryList.map((category) => {
                    return <MenuItem value={category}>{category}</MenuItem>;
                  })}
              </Select>
            </FormControl>

            <FormControl fullWidth margin="dense">
              <InputLabel id="currency">Currency</InputLabel>
              <Select
                labelId="currency"
                id="currency"
                name="currency"
                onChange={this.handleChange}
                value="EUR"
              >
                <MenuItem value="USD">USD</MenuItem>
                <MenuItem value="EUR">EUR</MenuItem>
              </Select>
            </FormControl>

            {/* <Typography component="h1" variant="h5">
              Items
            </Typography> */}
            <Grid>
              <TextField
                id="itemName"
                name="itemName"
                label="Item Name"
                variant="outlined"
                onChange={this.handleChange}
              />
              <TextField
                id="price"
                name="price"
                label="Price"
                type="number"
                variant="outlined"
                onChange={this.handleChange}
              />
              <TextField
                id="quantity"
                name="quantity"
                label="Quantity"
                type="number"
                variant="outlined"
                onChange={this.handleChange}
              />
            </Grid>

            <Grid Container>
              <Grid container direction="column">
                <label htmlFor="">1st Payment Due</label>
                <Grid container direction="row">
                  <input
                    id="firstPaymentDate"
                    name="firstPaymentDate"
                    type="Date"
                    onChange={this.handleChangePayment}
                  />
                  <TextField
                    id="firstPaymentAmount"
                    name="firstPaymentAmount"
                    label="1st Payment (%)"
                    type="number"
                    InputProps={{ inputProps: { min: 0, max: 100 } }}
                    onChange={this.handleChangePaymentAmount}
                  />
                </Grid>
              </Grid>
              <Grid container direction="column">
                <label htmlFor="">2nd Payment Due</label>
                <Grid container direction="row">
                  <input
                    id="secondPaymentDate"
                    name="secondPaymentDate"
                    type="Date"
                    onChange={this.handleChangePayment}
                  />
                  <Typography variant="body1">
                    2nd Payment Amount:
                    {this.state.paymentTerms.secondPaymentAmount &&
                      this.state.paymentsecondPaymentAmount}
                    %
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary">
            Submit Order
          </Button>
        </form>

        {/* <table>
          <thead>
            <tr>
              <th>Item Code</th>
              <th>Price</th>
              <th>Qty</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>B10375</td>
              <td>39.58</td>
              <td>30</td>
              <td>5 x 1kg, 10 x 500g</td>
            </tr>
          </tbody>
        </table>
        <div>10 items, 50 SKUs</div>
        <div>224 pcs</div>
        <div>Total buy: 9,625 USD</div> */}
      </Container>
    );
  }
}
