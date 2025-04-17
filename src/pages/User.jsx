import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function UserList() {
  const [users, setUsers] = useState([]);
  const MySwal = withReactContent(Swal);

  const fetchUsers = async () => {
    const res = await axios.get("http://localhost:3000/users");
    setUsers(res.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3000/users/${id}`);
    MySwal.fire("User Deleted!");
    fetchUsers(); 
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="container mt-4">
       <Header />
      <h2>Users List</h2>
      <Link to="/users/add" className="btn btn-primary mb-3">Add User</Link>
      <table className="table">
        <thead>
          <tr>
            <th>#</th><th>Name</th><th>Username</th><th>Email</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
                <Link to={`/users/update/${user.id}`} className="btn btn-info me-2">Edit</Link>
                <button onClick={() => deleteUser(user.id)} className="btn btn-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
