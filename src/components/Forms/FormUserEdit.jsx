import React, { Component } from "react";
import { withRouter } from "react-router";
import { withUser } from "../Auth/withUser";
import apiHandler from "../../api/apiHandler";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
// import InputLabel from "@material-ui/core/InputLabel";
// import MenuItem from "@material-ui/core/MenuItem";
// import Select from "@material-ui/core/Select";
// import FormControl from "@material-ui/core/FormControl";
import Box from "@material-ui/core/Box";

export class FormUserEdit extends Component {
  state = {};

  componentDidMount() {
    const { context } = this.props;
    const { user } = context;

    this.setState(user);

    // apiHandler
    // .getUserCompanyInfo()
    // .then((data) => {
    // this.setState(user);
    // this.setState({
    //   company: data,
    // });
    // })
    // .catch((error) => {
    //   console.log(error);
    // });
  }

  handleChange = (event) => {
    const value =
      event.target.type === "file" ? event.target.files[0] : event.target.value;

    const key = event.target.name;

    this.setState({ [key]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { context } = this.props;

    apiHandler
      .editUserInfo(this.state)
      .then((data) => {
        context.setUser(data);
        this.props.history.push("/dashboard");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    // console.log(
    //   this.state.company &&
    //     this.state.company.companyType &&
    //     typeof this.state.company.companyType
    // );

    return this.state.firstName ? (
      <Container component="main" maxWidth="xs" className="auth-container">
        <div>
          <Typography
            align="center"
            component="h1"
            variant="h5"
            gutterBottom="true"
          >
            Complete your profile
          </Typography>
          <form onSubmit={this.handleSubmit} noValidate>
            <TextField
              id="firstName"
              name="firstName"
              fullWidth
              variant="outlined"
              margin="normal"
              label="First Name"
              value={this.state.firstName}
              onChange={this.handleChange}
              margin="normal"
            />
            <TextField
              id="lastName"
              name="lastName"
              fullWidth
              variant="outlined"
              margin="normal"
              label="Last Name"
              value={this.state.lastName}
              onChange={this.handleChange}
            />
            <TextField
              id="email"
              name="email"
              fullWidth
              variant="outlined"
              margin="normal"
              label="Email Address"
              // helperText="Please enter a valid email address"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <TextField
              id="password"
              name="password"
              fullWidth
              variant="outlined"
              margin="normal"
              label="Password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            {/* <TextField
              id="company"
              name="company"
              fullWidth
              variant="outlined"
              margin="normal"
              label="Company Name"
              value={this.state.company.name}
            />
            <FormControl fullWidth variant="outlined" margin="normal">
              <InputLabel shrink="true" id="userType">
                Company Type
              </InputLabel>
              <Select
                fullWidth
                labelId="companyType"
                id="companyType"
                name="companyType"
                value={
                  this.state.company.companyType
                    ? this.state.company.companyType
                    : ""
                }
                onChange={this.handleChange}
              >
                <MenuItem value="retailer">Retailer</MenuItem>
                <MenuItem value="brand">Brand</MenuItem>
              </Select>
            </FormControl> */}
            {/* <FormControl fullWidth variant="outlined" margin="normal">
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
            </FormControl> */}
            <input
              accept="image/*"
              style={{ display: "none" }}
              id="raised-button-file"
              multiple
              variant="outlined"
              margin="normal"
              type="file"
            />
            <label htmlFor="raised-button-file">
              <Button
                variant="raised"
                component="span"
                variant="contained"
                color="secondary"
                size="small"
                className="upload-btn"
              >
                Upload a Profile Picture
              </Button>
            </label>

            <Box className="button-box">
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Save Changes
              </Button>
            </Box>
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

export default withRouter(withUser(FormUserEdit));
