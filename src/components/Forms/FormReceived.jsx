import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Loading from "../Loading";

import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

import CloudUploadSharpIcon from "@material-ui/icons/CloudUploadSharp";

import "../../styles/formReceived.css";

export class FormReceived extends Component {
  render() {
    // console.log("Form Received - Props", this.props);

    return this.props !== null ? (
      <Container component="main" maxWidth="xs" className="received-container">
        <div className="received-card">
          <div className="received-item">
            <img
              src="/images/receive-pic.png"
              alt="Shipment-illustration"
              className="ship-pic"
            />
          </div>

          <div className="received-item">
            <Typography
              align="center"
              component="h1"
              variant="h5"
              gutterBottom="true"
              className="received-title"
            >
              Has your order arrived?
            </Typography>
          </div>

          <form
            onSubmit={this.props.handleSubmit}
            onChange={this.props.handleChange}
            noValidate
          >
            <label htmlFor="raised-button-file">
              <Button
                variant="raised"
                component="span"
                variant="contained"
                color="secondary"
                size="small"
                className="upload-btn received-item"
              >
                <span className="upload-icon">
                  <CloudUploadSharpIcon></CloudUploadSharpIcon>
                </span>
                Upload reception documents
              </Button>
            </label>

            <Box className="button-box received-item">
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Mark order as received
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

export default withRouter(FormReceived);
