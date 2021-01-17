import React, { Component } from "react";
import { withUser } from "../Auth/withUser";
import apiHandler from "../../api/apiHandler";

import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";

export class FormCoProfileEdit extends Component {
  state = {};

  async componentDidMount() {
    const { context } = this.props;
    const { user } = context;
    // console.log(user.company);

    const companyInfo = await apiHandler.getUserCompanyInfo();
    try {
      this.setState(companyInfo);
      // console.log(this.state);
    } catch (error) {
      console.log(error);
    }
  }

  handleChange = (event) => {
    const value =
      event.target.type === "file" ? event.target.files[0] : event.target.value;

    const key = event.target.name;

    this.setState({ [key]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { authContext } = this.props;

    apiHandler
      .editCompanyInfo(this.state)
      .then((data) => {
        // authContext.setUser(data);
        this.props.history.push("/dashboard");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    // console.log(this.props);

    return this.state.name ? (
      <Container component="main" maxWidth="xs" className="auth-container">
        <div>
          <Typography
            align="center"
            component="h1"
            variant="h5"
            gutterBottom="true"
          >
            Your Company Info
          </Typography>
          <form
            onSubmit={this.handleSubmit}
            onChange={this.handleChange}
            noValidate
          >
            <TextField
              id="name"
              name="name"
              fullWidth
              variant="outlined"
              margin="normal"
              label="Company Name"
              defaultValue={this.state.name}
            />

            <FormControl fullWidth variant="outlined" margin="normal">
              <InputLabel shrink="true" id="companyType">
                Company Type
              </InputLabel>
              <Select
                fullWidth
                labelId="companyType"
                id="companyType"
                name="companyType"
                onChange={this.handleChange}
                defaultValue={this.state.companyType}
              >
                <MenuItem value="Retailer">Retailer</MenuItem>
                <MenuItem value="Brand">Brand</MenuItem>
              </Select>
            </FormControl>

            <TextField
              id="email"
              name="email"
              fullWidth
              variant="outlined"
              margin="normal"
              label="Main Email Contact"
              defaultValue={this.state.email}
            />
            <TextField
              id="phoneNumber"
              name="phoneNumber"
              fullWidth
              variant="outlined"
              margin="normal"
              label="Main Phone Number"
              defaultValue={this.state.phoneNumber}
            />
            <TextField
              id="vatNb"
              name="vatNb"
              fullWidth
              variant="outlined"
              margin="normal"
              label="VAT Number"
              defaultValue={this.state.vatNb}
            />
            <TextField
              id="shippingAddress"
              name="shippingAddress"
              fullWidth
              variant="outlined"
              margin="normal"
              label="Shipping Address"
              defaultValue={this.state.shippingAddress}
            />
            <TextField
              id="billingAddress"
              name="billingAddress"
              fullWidth
              variant="outlined"
              margin="normal"
              label="Billing Address"
              defaultValue={this.state.billingAddress}
            />
            <Typography variant="h6">Current users</Typography>
            {this.state.userList.map((user) => {
              return (
                <Grid container alignItems="center" className="current-users">
                  <Avatar alt={user.firstName} src={user.avatar}></Avatar>
                  <Typography variant="body1">
                    {user.firstName} {user.lastName} ({user.permission})
                  </Typography>
                </Grid>
              );
            })}

            <Button type="submit" fullWidth variant="contained" color="primary">
              Save changes
            </Button>
          </form>
        </div>
      </Container>
    ) : (
      <Typography component="h1" variant="h5">
        loading
      </Typography>
    );
  }
}

export default withUser(FormCoProfileEdit);
