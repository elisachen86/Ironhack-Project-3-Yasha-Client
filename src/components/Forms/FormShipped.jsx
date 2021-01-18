import React, { Component } from "react";
import apiHandler from "../../api/apiHandler";
import { withRouter } from "react-router-dom";

import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

export class FormShipped extends Component {
  state = {
    orders : null
  };

   async componentDidMount() {
     console.log("THIS PROPS THERE", this.props);
     const data = await apiHandler.getOneOrder(this.props.match.params.id)
     console.log("THIS IS THE DATAAA >>>", data);
     this.setState({
       orders: data
     })
     
  }

  handleChange = (event) => {
    const value = event.target.value;
    const key = event.target.name;

    this.setState({ [key]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    apiHandler
      .updateOneOrder(this.props.match.params.id)
      .then((data) => {
        apiHandler.getOneOrder(this.props.match.params.id);
        this.props.history.push(`/order/${this.props.match.params.id}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return this.props !== null ? (
      <Container component="main" maxWidth="xs" className="auth-container">
        <div>
          
          {/* {  this.props.order.steps[this.props.order.steps.length - 1].stage === "shipped" && */}
                {/* <FormReceived></FormReceived> */}
            {/* } */}
            {/* {  this.props.order.steps[this.props.order.steps.length - 1].stage === "shipped" && */}
<Typography
            align="center"
            component="h1"
            variant="h5"
            gutterBottom="true"
          >

                Is your order ready to ship?
</Typography>

            {/* } */}

            {/* {  this.props.order.steps[this.props.order.steps.length - 1].stage === "received" && */}
<Typography
            align="center"
            component="h1"
            variant="h5"
            gutterBottom="true"
          >

                Has your received your shipment?
</Typography>

            {/* } */}
            
          
          <form
            onSubmit={this.handleSubmit}
            onChange={this.handleChange}
            noValidate
          >
            <label htmlFor="raised-button-file">
              <Button
                variant="raised"
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
      <Typography component="h1" variant="h5">
        loading
      </Typography>
    );
  }
}

export default withRouter(FormShipped);
