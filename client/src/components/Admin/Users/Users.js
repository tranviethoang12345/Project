import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { Button, Grid } from '@material-ui/core';

import User from './User/User';
import { deleteUser } from '../../../actions/Admin/User';
const Users = ({ setCurrentId }) => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  return (
    <React.Fragment>
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
              {users.map((user) => (
                <Grid key={user._id}>
                  <User user={user} />
                </Grid>
              ))}

              <td>
                {/* Update */}
                <Button
                  class="btn border-shadow update"
                  component={Link}
                  to="/admin/updateUser"
                >
                  <span class="text-gradient">
                    <i class="fas fa-pencil-alt"></i>
                  </span>
                </Button>

                {/* Delete */}
                <Button
                  class="btn border-shadow delete"
                  onClick={() => dispatch(deleteUser(users._id))}
                >
                  <span class="text-gradient">
                    <i class="fas fa-times"></i>
                  </span>
                </Button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </React.Fragment>
  );
};

export default Users;
