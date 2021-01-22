import React from "react";
import Container from "@material-ui/core/Container";
import HomeDisplay from "../components/HomeDisplay";
import "../styles/home.css";

class Home extends React.Component {
  render() {
    return (
      <Container>
        <HomeDisplay></HomeDisplay>
      </Container>
    );
  }
}

export default Home;
