import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { UserContext } from "../Auth/UserContext";
import apiHandler from "../../api/apiHandler";
import { Redirect } from "react-router-dom";

import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";

class FormSignup extends Component {
  static contextType = UserContext;

  state = {
    email: "",
    password: "",
  };

  handleChange = (event) => {
    const value = event.target.value;
    const key = event.target.name;

    this.setState({ [key]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    apiHandler
      .signup(this.state)
      .then((data) => {
        // console.log(data);
        apiHandler.createCompany({
          name: this.state.company,
          companyType: this.state.companyType,
        });
        // data.company = this.state.company;
        this.context.setUser(data);
        this.props.history.push("/profile");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    if (this.context.user) {
      return <Redirect to="/dashboard" />;
    }

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form onSubmit={this.handleSubmit} noValidate>
            <Grid container spacing={2}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                margin="normal"
                onChange={this.handleChange}
              />
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                margin="normal"
                onChange={this.handleChange}
              />
              <TextField
                variant="outlined"
                required
                fullWidth
                type="email"
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                margin="normal"
                autoFocus
                onChange={this.handleChange}
              />
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                margin="normal"
                autoComplete="current-password"
                onChange={this.handleChange}
              />
              <TextField
                variant="outlined"
                required
                fullWidth
                name="company"
                label="Company"
                type="company"
                id="company"
                margin="normal"
                autoComplete="Company"
                onChange={this.handleChange}
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
                >
                  <MenuItem value="retailer">Retailer</MenuItem>
                  <MenuItem value="brand">Brand</MenuItem>
                </Select>
              </FormControl>

              <FormControlLabel
                control={
                  <Checkbox
                    onChange={this.handleChange}
                    value="allowExtraEmails"
                    color="primary"
                    margin="normal"
                  />
                }
                id="allowExtraEmails"
                name="allowExtraEmails"
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
            <Button type="submit" fullWidth variant="contained" color="primary">
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="/signin" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );
  }
}

export default withRouter(FormSignup);
