import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

import "./includes/index.css";

const Admin = () => {
  return (
    <React.Fragment>
      <header id="header">
        <nav>
          <div class="container">
            <div class="text-center">
              <Button class="nav-brand text-dark" component={Link} to="/home">
                User Management System
              </Button>
            </div>
          </div>
        </nav>
      </header>
      <main id="site-main">
        <div class="container">
          <div class="box-nav d-flex-justify-between">
            <Button class="border-shadow" component={Link} to="/admin/newUser">
              <span class="text-gradient">
                New User <i class="fas fa-user"></i>
              </span>
            </Button>
          </div>

          {/* Form handing */}
          <form action="/" method="POST">
            <table class="table">
              <thead class="thead-dark">
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Status</th>
                  <th>Gender</th>
                  <th>Role</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* include show all */}
                <tr>
                  <td>1</td>
                  <td>fullName</td>
                  <td>username</td>
                  <td>Email</td>
                  <td>status</td>
                  <td>gender</td>
                  <td>role</td>
                  <td>
                    <Button
                      href="/admin/update_user?id=<%= users[i]._id%>"
                      class="btn border-shadow update"
                    >
                      <span class="text-gradient">
                        <i class="fas fa-pencil-alt"></i>
                      </span>
                    </Button>
                    <Button class="btn border-shadow delete">
                      <span class="text-gradient">
                        <i class="fas fa-times"></i>
                      </span>
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </main>
    </React.Fragment>
  );
};

export default Admin;
