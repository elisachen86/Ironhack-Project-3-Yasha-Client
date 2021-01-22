import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";
import "../styles/home.css";

export default class HomeDisplay extends Component {
  render() {
    return (
        <div>
      <div className="home-flex">
        <div className="section-one">
          <h3 className="hero-title">
          We're helping businesses like yours all around the world
          </h3>
          <Typography
            variant="h5"
            style={{ fontSize: "1.2rem" }}
            align="center"
            className="section-one-el"
          >
            Manage orders, track processes and get the best results using a
            single platform.
          </Typography>
          <Box textAlign="center">
            <Button
              variant="outlined"
              style={{ justifyContent: "center" }}
              color="secondary"
              href="/signup"
            >
              Get started
            </Button>
          </Box>
        </div>
        <div>
          <img
            className="first-section-illu"
            src="/images/herobanner.png"
            alt="banner hero"
          ></img>
        </div>
        </div>

        <section className="home-flex section-two">
            <div className="item-flex"> 
            <h1 className="title-card">Streamlines orders between supermarkets and brands</h1>
            <p className="detail-card">Wholesale orders between supermarkets and brands are currently managed manually, using Excel and email.</p>
            </div>
            <div className="item-flex">
            <h1 className="title-card">Power every part of your business</h1>
            <p className="detail-card">Sell. Ship. Grow. Manage your multi-channel and wholesale business in one place with Yasha.</p>
            </div>
            <div className="item-flex">
            <h1 className="title-card">Reporting with smart insights</h1>
            <p className="detail-card">Create and save custom inventory and sales reports to track business performance and forecast for growth.</p>
            </div>


        </section>
        <footer className="section-one">
            <div className="bait-title">Your next stage of growth is just a click away.</div>
            <Box textAlign="center">
            <Button
              variant="contained"
              style={{ justifyContent: "center" }}
              color="primary"
              href="/signup"
            >
              Start a free trial
            </Button>
          </Box>
        </footer>
      </div>
    );
  }
}
