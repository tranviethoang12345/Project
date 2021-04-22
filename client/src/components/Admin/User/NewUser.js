import React from 'react';

const NewUser = () => {
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
            <div class="filter">
              <a href="/admin">
                {' '}
                <i class="fas fa-angle-double-left"></i>All Users{' '}
              </a>
            </div>
          </div>
          <div class="form-title text-center">
            <h2 class="text-dark">Create User</h2>
            <span class="text-light">
              {' '}
              Use the below form to Create an account{' '}
            </span>
          </div>

          {/* <add_user form */}
          {/* <!-- form handing --> */}
          <form action="/admin/api/users" method="POST" id="add_user">
            <div class="new_user">
              {/* <!-- Full name --> */}
              <div class="form-group">
                <label for="fullName" class="text-light">
                  Full Name
                </label>
                <input type="hidden" name="id" value="" />
                <input
                  type="text"
                  name="fullName"
                  value=""
                  id=""
                  placeholder="Full Name"
                />
              </div>

              {/* <!-- Username --> */}
              <div class="form-group">
                <label for="username" class="text-light">
                  Username
                </label>
                <input type="hidden" name="id" value="" />
                <input
                  type="text"
                  name="username"
                  value=""
                  id=""
                  placeholder="Username"
                />
              </div>

              {/* <!-- Email --> */}
              <div class="form-group">
                <label for="Email" class="text-light">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  value=""
                  id=""
                  placeholder="Email"
                />
              </div>

              {/* <!-- Password --> */}
              <div class="form-group">
                <label for="Password" class="text-light">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value=""
                  id=""
                  placeholder=""
                />
              </div>

              {/* <!-- Gender --> */}
              <div class="form-group">
                <label for="gender" class="text-light">
                  Gender
                </label>
                <div class="radio inline">
                  <input type="radio" name="gender" value="Male" id="radio-2" />
                  <label for="radio-2" class="radio-label">
                    Male
                  </label>
                </div>
                <div class="radio inline">
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    id="radio-3"
                  />
                  <label for="radio-3" class="radio-label">
                    Female
                  </label>
                </div>
              </div>

              {/* <!-- Status --> */}
              <div class="form-group">
                <label for="status" class="text-light">
                  Status
                </label>
                <div class="radio inline">
                  <input
                    type="radio"
                    name="status"
                    value="Active"
                    id="radio-4"
                  />
                  <label for="radio-4" class="radio-label">
                    Active
                  </label>
                </div>
                <div class="radio inline">
                  <input
                    type="radio"
                    name="status"
                    value="Inactive"
                    id="radio-5"
                  />
                  <label for="radio-5" class="radio-label">
                    Inactive
                  </label>
                </div>
              </div>

              {/* <!-- roleName --> */}
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

              {/* <!-- Button Submit --> */}
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

export default NewUser;
