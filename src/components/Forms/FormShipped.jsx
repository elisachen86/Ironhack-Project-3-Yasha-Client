import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import Loading from "../Loading";

import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import CloudUploadSharpIcon from "@material-ui/icons/CloudUploadSharp";

import "../../styles/formShipped.css";

export class FormShipped extends Component {
  render() {
    // console.log("Form Shipped - props", this.props);

    return this.props !== null ? (
      <Container component="main" maxWidth="xs" className="shipped-container">
        <div className="shipped-card">

        {/* FOR PROJECT PRESENTATION PURPOSES - DO NOT KEEP THIS IMG
        CREDITS: https://dribbble.com/shots/14966911-FICHA-illustrations */}
        <div className="shipped-item"><img src="/images/shipment-pic.png" alt="Shipment-illustration" className="ship-pic"/></div>
          <div className="shipped-item">
            <Typography
              align="center"
              component="h1"
              variant="h5"
              gutterBottom="true"
              className="shipped-title"
            >
              Is your order ready to ship?
            </Typography>
          </div>
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
                className="upload-btn shipped-item"
              >
                <span className="upload-icon">
                  <CloudUploadSharpIcon></CloudUploadSharpIcon>
                </span>
                Upload shipping documents
              </Button>
            </label>

            <Box className="button-box shipped-item">
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
