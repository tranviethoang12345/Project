import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  LinearProgress,
  Paper,
  Button,
} from "@material-ui/core";

import useStyles from "./styles";
import { StyledTableCell, StyledTableRow } from "../../../common/TableStyles"
import { deleteUser } from "../../../actions/Admin/User";

const Users = ({ setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  const [progress, setProgress] = useState();

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return !users.length ? (
    <div className={classes.root}>
      <LinearProgress variant="determinate" value={progress} />
    </div>
  ) : (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell align="right">Name</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
            <StyledTableCell align="right">
              Status<br></br>(Process)
            </StyledTableCell>
            <StyledTableCell align="right">
              Role<br></br>(Process)
            </StyledTableCell>
            <StyledTableCell align="right">Update<br></br>Action&nbsp;(s)</StyledTableCell>
            <StyledTableCell align="right">Delete<br></br>Action&nbsp;(s)</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <StyledTableRow key={user._id}>
              <StyledTableCell component="th" scope="row">
                1
              </StyledTableCell>
              <StyledTableCell align="right">{user.name}</StyledTableCell>
              <StyledTableCell align="right">{user.email}</StyledTableCell>
              <StyledTableCell align="right">{user.status}</StyledTableCell>
              <StyledTableCell align="right">role</StyledTableCell>
              <StyledTableCell align="center">
                  {/* Update */}
                  <Button class="btn border-shadow update">
                    <span class="text-gradient">
                      <i class="fas fa-pencil-alt"></i>
                    </span>
                  </Button>
              </StyledTableCell>
              <StyledTableCell align="center">
                <Button
                  class="btn border-shadow delete"
                  onClick={() => dispatch(deleteUser(Users._id))}
                >
                  <span class="text-gradient">
                    <i class="fas fa-times"></i>
                  </span>
                </Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Users;
