import React from "react";

const Header = () => {
  return (
    <React.Fragment>
      <header class="masthead text-center text-white">
        <div class="masthead-content">
          <div class="container">
            <h1 class="masthead-heading mb-0">Welcome CZ-M</h1>
            <h2 class="masthead-subheading mb-0">Be Smart and Work Hard</h2>
            <a href="#" class="btn btn-primary btn-xl rounded-pill mt-5">
              Let's Start
            </a>
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
