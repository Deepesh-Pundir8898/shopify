import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUsers, filterUsers, deleteUser } from "../../redux/userSlice";
import axios from "axios";

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.filteredUsers);

  useEffect(() => {
    axios.get("https://randomuser.me/api/?results=20").then((response) => {
      dispatch(setUsers(response.data.results));
    });
  }, [dispatch]);

  return (
    <div>
      <h1>Users</h1>
      <div>
        <button onClick={() => dispatch(filterUsers("all"))}>All</button>
        <button onClick={() => dispatch(filterUsers("male"))}>Male</button>
        <button onClick={() => dispatch(filterUsers("female"))}>Female</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.login.uuid}>
              <td>
                {user.name.first} {user.name.last}
              </td>
              <td>{user.email}</td>
              <td>{user.gender}</td>
              <td>
                <button onClick={() => dispatch(deleteUser(user.login.uuid))}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
