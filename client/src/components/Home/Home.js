import React from "react";

const Home = () => {
  return (
    <React.Fragment>
      <section>
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6 order-lg-2">
              <div class="p-5">
                {/* Image */}
                <img
                  class="img-fluid rounded-circle"
                  src="img/home/01.jpeg"
                  alt=""
                />
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
                  <a href="/room" class="btn btn-secondary font-weight-bold">
                    Join CZ-M
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* workspace */}
      <section>
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6 order-lg-1">
              <div class="p-5">
                {/* Image */}
                <img
                  class="img-fluid rounded-circle"
                  src="img/home/02.jpeg"
                  alt=""
                />
              </div>
            </div>

            <div class="col-lg-6 order-lg-2">
              <div class="p-5">
                <h2 class="display-4">Workspace</h2>
                <p>
                  Connect with another user from anywhere with a hybrid approach
                  for virtual workspace.
                  <br />
                  Communicate important announcements to the Stream page.
                  <br />
                  Enable face-to-face connections with another user using Chat
                  Zoom - Meeting built into CZ-M.
                </p>

                {/* Button Join */}
                <div>
                  <a
                    href="/workspace"
                    class="btn btn-secondary font-weight-bold"
                  >
                    Join Workspace
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Home;
