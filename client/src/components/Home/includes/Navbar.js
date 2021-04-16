import React from "react";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";

const Navbar = () => {
  return (
    <React.Fragment>
      {/* Navigation */}
      <nav class="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
        <div class="container">
          {/* Left */}
          <Typography class="navbar-brand" component={Link} to="/home">
            name
          </Typography>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          {/* Right */}
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a class="nav-link" href="/admin">
                  Admin
                </a>
              </li>
              <li class="nav-item">
                <Typography class="nav-link" component={Link} to="/home">
                  Profile
                </Typography>
              </li>
              <li class="nav-item">
                <Typography class="nav-link" component={Link} to="/">
                  Logout
                </Typography>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
