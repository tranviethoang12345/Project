import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container } from '@material-ui/core';

import Header from '../../includes/Header';

const NewUser = () => {
  return (
    <React.Fragment>
      <Header />

      <main id="site-main">
        <Container>
          <div class="box-nav d-flex-justify-between">
            <div class="filter">
              <Button component={Link} to="/admin">
                {' '}
                <i class="fas fa-angle-double-left"></i>All Users{' '}
              </Button>
            </div>
          </div>
          <div class="form-title text-center">
            <h2 class="text-dark">Create User</h2>
            <span class="text-dark">
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
                <label for="fullName" class="text-dark">
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
                <label for="username" class="text-dark">
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
                <label for="Email" class="text-dark">
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
                <label for="Password" class="text-dark">
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
                <label for="gender" class="text-dark">
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
                <label for="status" class="text-dark">
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
                <label for="roleName" class="text-dark">
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
        </Container>
      </main>
    </React.Fragment>
  );
};

export default NewUser;
