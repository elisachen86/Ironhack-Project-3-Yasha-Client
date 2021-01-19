import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import Loading from '../Loading';

import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

export class FormShipped extends Component {
  
  render() {

   // console.log("Form Shipped - props", this.props);

    return this.props !== null ? (
      <Container component="main" maxWidth="xs" className="auth-container">
        <div>
          <Typography
            align="center"
            component="h1"
            variant="h5"
            gutterBottom="true"
          >

                Is your order ready to ship?
          </Typography>
          <form
            onSubmit={this.props.handleSubmit}
            onChange={this.props.handleChange}
            noValidate
          >
            <label htmlFor="raised-button-file">
              <Button
                // variant="raised"
                component="span"
                variant="contained"
                color="secondary"
                size="small"
                className="upload-btn"
              >
                Upload shipping documents
              </Button>
            </label>

            <Box className="button-box">
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Mark order as shipped
              </Button>
            </Box>
          </form>
        </div>
      </Container>
    ) : (
      <Loading></Loading>
    );
  }
}

export default withRouter(FormShipped);
