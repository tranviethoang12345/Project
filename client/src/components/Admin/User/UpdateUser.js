import React from "react";

const UpdateUser = () => {
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

      {/* Main Site */}
      <main id="site-main">
        <div class="container">
          <div class="box-nav d-flex-justify-between">
            <div class="filter">
              <a href="/admin">
                {" "}
                <i class="fas fa-angle-double-left"></i>All Users{" "}
              </a>
            </div>
          </div>
          <div class="form-title text-center">
            <h2 class="text-dark">Update User</h2>
            <span class="text-light">
              {" "}
              Use the below form to Update an account{" "}
            </span>
          </div>

          {/* form handing */}
          <form method="POST" id="update_user">
            <div class="new_user">
              {/* Full name */}
              <div class="form-group">
                <label for="fullName" class="text-light">
                  Full Name
                </label>
                <input type="hidden" name="id" value="<%= users._id %>" />
                <input
                  type="text"
                  name="fullName"
                  value="<%= users.fullName %>"
                  id=""
                  placeholder="Tran Viet Hoang"
                />
              </div>

              {/* Username */}
              <div class="form-group">
                <label for="username" class="text-light">
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  value="<%= users.username%>"
                  id=""
                  placeholder="Viet Hoang Max"
                />
              </div>

              {/* Email */}
              <div class="form-group">
                <label for="Email" class="text-light">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  value="<%= users.email %>"
                  id=""
                  placeholder="example@gmail.com"
                />
              </div>

              {/* Gender */}
              <div class="form-group">
                <label for="gender" class="text-light">
                  Gender
                </label>
                <div class="radio inline">
                  <input type="radio" name="gender" id="radio-2" value="Male" />
                  <label for="radio-2" class="radio-label">
                    Male
                  </label>
                </div>
                <div class="radio inline">
                  <input
                    type="radio"
                    name="gender"
                    id="radio-3"
                    value="Female"
                  />
                  <label for="radio-3" class="radio-label">
                    Female
                  </label>
                </div>
              </div>

              {/* Status */}
              <div class="form-group">
                <label for="status" class="text-light">
                  Status
                </label>
                <div class="radio inline">
                  <input
                    type="radio"
                    name="status"
                    id="radio-4"
                    value="Active"
                  />
                  <label for="radio-4" class="radio-label">
                    Active
                  </label>
                </div>
                <div class="radio inline">
                  <input
                    type="radio"
                    name="status"
                    id="radio-5"
                    value="Inactive"
                  />
                  <label for="radio-5" class="radio-label">
                    Inactive
                  </label>
                </div>
              </div>

              {/* Role Name */}
              <div class="form-group">
                <label for="roleName" class="text-light">
                  Role
                </label>
                <div class="checkbox inline">
                  <input
                    type="checkbox"
                    name="role"
                    value="Admin"
                    id="checkbox"
                  />
                  <label for="checkbox" class="checkbox-label">
                    Admin
                  </label>
                </div>
                <div class="checkbox inline">
                  <input
                    type="checkbox"
                    name="role"
                    value="User"
                    id="checkbox-2"
                  />
                  <label for="checkbox-2" class="checkbox-label">
                    User
                  </label>
                </div>
              </div>

              {/* Button Submit */}
              <div class="form-group">
                <button type="submit" class="btn text-dark update">
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </main>
    </React.Fragment>
  );
};

export default UpdateUser;
