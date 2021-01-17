import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";

class Home extends React.Component {
  render() {
    return (
      <Container>
        <Typography variant="h2" align="center">
          Welcome to Yasha
        </Typography>

        {/* <Button variant="contained" color="primary" href="/signin">
            Log In
          </Button>
          <Button variant="contained" color="primary" href="/signup">
            Sign Up
          </Button> */}
      </Container>
    );
  }
}

export default Home;
