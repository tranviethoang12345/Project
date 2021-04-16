import React from "react";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";

const Header = () => {
  return (
    <React.Fragment>
      <header class="masthead text-center text-white">
        <div class="masthead-content">
          <div class="container">
            <Typography
              class="masthead-heading mb-0"
              variant="h1"
              component="h2"
              gutterBottom
            >
              Welcome CZ-M
            </Typography>
            <Typography
              class="masthead-subheading mb-0"
              variant="h2"
              gutterBottom
            >
              Be Smart and Work Hard
            </Typography>
            <Typography
              class="btn btn-primary btn-xl rounded-pill mt-5"
              component={Link}
              to="/home"
            >
              Let's Start
            </Typography>
          </div>
        </div>
        <div class="bg-circle-1 bg-circle"></div>
        <div class="bg-circle-2 bg-circle"></div>
        <div class="bg-circle-3 bg-circle"></div>
        <div class="bg-circle-4 bg-circle"></div>
      </header>
    </React.Fragment>
  );
};

export default Header;
