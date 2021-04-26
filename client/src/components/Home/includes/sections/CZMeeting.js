import React from "react";
import { Link } from "react-router-dom";
import img from "../../../../assets/img/Home/01.jpeg";

import { Button } from "@material-ui/core";

const CZMeeting = (user) => {
  return (
    <React.Fragment>
      <section>
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6 order-lg-2">
              <div class="p-5">
                {/* Image */}
                <img class="img-fluid rounded-circle" src={img} alt={img} />
              </div>
            </div>

            <div class="col-lg-6 order-lg-1">
              <div class="p-5">
                <h2 class="display-4">Chat Zoom - Meeting</h2>
                <p>
                  Joining a meeting is quick and easy!
                  <br />
                  Discover the options for joining meetings based on your
                  requirements and to ensure the best meeting experience
                  possible.
                </p>
                {/* Button Join */}
                <div>
                  <Button
                    class="btn btn-secondary font-weight-bold"
                    component={Link}
                    to="/zoom"
                  >
                    Join CZ-M
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default CZMeeting;
