import React from "react";

const User = (data) => {
  return (
    <React.Fragment>
      <tr></tr>
      <td>1</td>
      <td>{data.user.name}</td>
      <td>username</td>
      <td>{data.user.email}</td>
      <td>{data.user.status}</td>
      <td>{data.user.gender}</td>
      <td>role</td>
    </React.Fragment>
  );
};

export default User;
