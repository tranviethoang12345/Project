import React from 'react';

import { useDispatch } from 'react-redux';

import { Button } from '@material-ui/core';

import {
  StyledTableCell,
  StyledTableRow,
} from '../../../../common/TableStyles';
import { deleteUser } from '../../../../actions/Admin/User';

const User = ({ user, ID, setCurrentId }) => {
  const dispatch = useDispatch();
  return (
    <StyledTableRow key={user._id}>
      <StyledTableCell component="th" scope="row">
        {ID}
      </StyledTableCell>
      <StyledTableCell align="left">{user.name}</StyledTableCell>
      <StyledTableCell align="left">{user.email}</StyledTableCell>
      <StyledTableCell align="right">{user.status}</StyledTableCell>
      <StyledTableCell align="right">role</StyledTableCell>

      {/* Update */}
      <StyledTableCell align="center">
        <Button
          class="btn border-shadow update"
          onClick={() => setCurrentId(user._id)}
        >
          <span class="text-gradient">
            <i class="fas fa-pencil-alt"></i>
          </span>
        </Button>
      </StyledTableCell>

      {/* Delete */}
      <StyledTableCell align="center">
        <Button
          class="btn border-shadow delete"
          onClick={() => dispatch(deleteUser(user._id))}
        >
          <span class="text-gradient">
            <i class="fas fa-times"></i>
          </span>
        </Button>
      </StyledTableCell>
    </StyledTableRow>
  );
};

export default User;
