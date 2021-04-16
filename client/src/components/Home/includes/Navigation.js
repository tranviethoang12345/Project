import React from "react";

const Navigation = () => {
  return (
    <React.Fragment>
      {/* Navigation */}
      <nav class="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
        <div class="container">
          {/* Left */}
          <a class="navbar-brand" href="#">
            a
          </a>
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
                <a class="nav-link" href="#">
                  Profile
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/logout">
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navigation;
