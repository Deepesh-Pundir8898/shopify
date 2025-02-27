import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUsers, filterUsers, deleteUser } from "../../redux/userSlice";
import axios from "axios";
import style from "./user.module.css";

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.filteredUsers);

  useEffect(() => {
    axios.get("https://randomuser.me/api/?results=20").then((response) => {
      dispatch(setUsers(response.data.results));
    });
  }, [dispatch]);
  // console.log(users);

  return (
    <div className={style.usersContainer}>
      <h1>User Details</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, omnis
        quasi. Fugiat, qui. Eius minus provident, ipsum, deserunt soluta
        pariatur necessitatibus rem beatae laborum quasi dolorem quis vitae
        magni, recusandae exercitationem non id quae labore iste. Aperiam
        corrupti, numquam assumenda accusamus nisi atque suscipit nemo quis
        itaque quos! Nam voluptatum illo fugit sapiente exercitationem nisi
        minima beatae magni, est expedita vero, quod molestiae amet maxime
        eveniet molestias repellendus nostrum optio deleniti laudantium? Tempora
        quam maxime accusantium deleniti id asperiores pariatur maiores animi
        natus iure? Adipisci dignissimos voluptatem quis recusandae, optio a.
        Perferendis est magnam porro nihil excepturi. Necessitatibus, eligendi
        quod!
      </p>
      <div className={style.filterButtons}>
        <button onClick={() => dispatch(filterUsers("all"))}>All</button>
        <button onClick={() => dispatch(filterUsers("male"))}>Male</button>
        <button onClick={() => dispatch(filterUsers("female"))}>Female</button>
      </div>
      <table border="1">
        <thead>
          <tr>
            <th>Image</th>
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
                <img src={user.picture.thumbnail} alt="user" />
              </td>
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
