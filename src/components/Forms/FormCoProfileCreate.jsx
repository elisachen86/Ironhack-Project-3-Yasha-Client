import React, { Component } from "react";

import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

export default class FormCoProfileCreate extends Component {
  render() {
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div>
          <Typography component="h1" variant="h5">
            Add your company
          </Typography>
          <form
            onSubmit={this.handleSubmit}
            onChange={this.handleChange}
            noValidate
          >
            <TextField id="name" name="name" fullWidth label="Company Name" />
            <InputLabel shrink="true" id="companyType">
              Company Type
            </InputLabel>

            <Select
              fullWidth
              labelId="companyType"
              id="companyType"
              name="companyType"
              onChange={this.handleChange}
            >
              <MenuItem value="Retailer">Retailer</MenuItem>
              <MenuItem value="Brand">Brand</MenuItem>
            </Select>
            <TextField
              id="email"
              name="email"
              fullWidth
              label="Main Email Contact"
            />
            <TextField
              id="phoneNumber"
              name="phoneNumber"
              fullWidth
              label="Main Phone Number"
            />
            <TextField id="vatNb" name="vatNb" fullWidth label="VAT Number" />
            <TextField
              id="shippingAddress"
              name="shippingAddress"
              fullWidth
              label="Shipping Address"
            />
            <TextField
              id="billingAddress"
              name="billingAddress"
              fullWidth
              label="Billing Address"
            />
            <Button type="submit" fullWidth variant="contained" color="primary">
              Create Company Profile
            </Button>
          </form>
        </div>
      </Container>
    );
  }
}
