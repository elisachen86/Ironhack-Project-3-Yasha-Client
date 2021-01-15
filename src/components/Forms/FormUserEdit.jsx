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

export class FormUserEdit extends Component {
  state = {};

  componentDidMount() {
    const { context } = this.props;
    const { user } = context;
    console.log(user);

    this.setState({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
    });
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
      .editUserInfo(this.state)
      .then((data) => {
        authContext.setUser(data);
        this.props.history.push("/profile");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    // console.log(this.props);
    return this.state.firstName ? (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div>
          <Typography component="h1" variant="h5">
            Complete your profile
          </Typography>
          <form
            onSubmit={this.handleSubmit}
            onChange={this.handleChange}
            noValidate
          >
            <TextField
              id="firstName"
              name="firstName"
              fullWidth
              label="First Name"
              defaultValue={this.state.firstName}
            />
            <TextField
              id="lastName"
              name="lastName"
              fullWidth
              label="Last Name"
              defaultValue={this.state.lastName}
            />
            <TextField
              id="email"
              name="email"
              fullWidth
              label="Email Address"
              defaultValue={this.state.email}
            />
            <TextField
              id="company"
              name="company"
              fullWidth
              label="Company Name"
              defaultValue={this.state.company}
            />
            <InputLabel shrink="true" id="userType">
              Company Type
            </InputLabel>
            <Select
              fullWidth
              labelId="userType"
              id="userType"
              name="userType"
              defaultValue={this.state.userType}
              onChange={this.handleChange}
            >
              <MenuItem value="Retailer">Retailer</MenuItem>
              <MenuItem value="Brand">Brand</MenuItem>
            </Select>
            <InputLabel shrink="true" id="permission">
              Permission
            </InputLabel>
            <Select
              fullWidth
              labelId="permission"
              id="permission"
              name="permission"
              defaultValue={this.state.permission}
              onChange={this.handleChange}
            >
              <MenuItem value="Admin">Admin</MenuItem>
              <MenuItem value="Editor">Editor</MenuItem>
            </Select>
            <input
              accept="image/*"
              style={{ display: "none" }}
              id="raised-button-file"
              multiple
              type="file"
            />
            <label htmlFor="raised-button-file">
              <Button variant="raised" component="span">
                Upload
              </Button>
            </label>

            <TextField
              id="password"
              name="password"
              fullWidth
              label="Password"
              defaultValue={this.state.password}
            />

            <Button type="submit" fullWidth variant="contained" color="primary">
              Save Changes
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

export default withUser(FormUserEdit);
