import React from 'react';
import "./includes/index.css"

const Admin = () => {
  return (
    <React.Fragment>
      <header id="header">
      <nav>
        <div class="container">
          <div class="text-center">
            <a href="/home" class="nav-brand text-dark">
              User Management System
            </a>
          </div>
        </div>
      </nav>
    </header>
      <main id="site-main">
        <div class="container">
          <div class="box-nav d-flex-justify-between">
            <a href="admin/add_user" class="border-shadow">
              <span class="text-gradient">
                New User <i class="fas fa-user"></i>
              </span>
            </a>
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
                    <a
                      href="/admin/update_user?id=<%= users[i]._id%>"
                      class="btn border-shadow update"
                    >
                      <span class="text-gradient">
                        <i class="fas fa-pencil-alt"></i>
                      </span>
                    </a>
                    <a class="btn border-shadow delete">
                      <span class="text-gradient">
                        <i class="fas fa-times"></i>
                      </span>
                    </a>
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
