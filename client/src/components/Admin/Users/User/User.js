import React from "react";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";

import { Button } from "@material-ui/core";

import { deleteUser } from "../../../../actions/Admin/User";
import HeaderUser from "./HeaderUser";
import Users from "../Users";

const User = (data) => {
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <HeaderUser />
      <tr>
        <td>1</td>
        <td>{data.user.name}</td>
        <td>{data.user.email}</td>
        <td>{data.user.status}</td>
        <td>{data.user.gender}</td>
        <td>role</td>

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
        </td>
        <td>
          {/* Delete */}
          <Button
            class="btn border-shadow delete"
            onClick={() => dispatch(deleteUser(Users._id))}
          >
            <span class="text-gradient">
              <i class="fas fa-times"></i>
            </span>
          </Button>
        </td>
      </tr>
    </React.Fragment>
  );
};

export default User;
