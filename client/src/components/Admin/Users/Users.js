import React from 'react';
import { useSelector } from 'react-redux';
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  CircularProgress,
  Paper,
} from '@material-ui/core';

import useStyles from './styles';
import { StyledTableCell } from '../../../common/TableStyles';
import User from './User/User';

const Users = ({ setCurrentId }) => {
  const classes = useStyles();
  const users = useSelector((state) => state.users);

  return !users.length ? (
    <CircularProgress />
  ) : (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell align="left">Username</StyledTableCell>
            <StyledTableCell align="left">Email</StyledTableCell>
            <StyledTableCell align="right">
              Status<br></br>(Process)
            </StyledTableCell>
            <StyledTableCell align="right">
              Role<br></br>(Process)
            </StyledTableCell>
            <StyledTableCell align="right">
              Update<br></br>Action&nbsp;(s)
            </StyledTableCell>
            <StyledTableCell align="right">
              Delete<br></br>Action&nbsp;(s)
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user, index) => (
            <User user={user} ID={index+1} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Users;
