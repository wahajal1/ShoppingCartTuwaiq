import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Bounce, toast } from "react-toastify";

function UpdateUser() {
  const [userData, setUserData] = useState({
    name: "",
    username: "",
    email: "",
  });

  const navigate = useNavigate();
  const { id } = useParams();

  const notify = () =>
    toast("User updated successfully!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      theme: "colored",
      transition: Bounce,
    });


  const fetchUser = async () => {
    const res = await axios.get(`http://localhost:3000/users/${id}`);
    setUserData(res.data);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3000/users/${id}`, userData);
    notify();
    navigate("/user");
  };

  return (
    <div>
      <Header />
      <div className="container">
        <h1>Update User</h1>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Name"
            className="form-control mb-2"
            value={userData.name}
            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
          />
          <input
            placeholder="Username"
            className="form-control mb-2"
            value={userData.username}
            onChange={(e) =>
              setUserData({ ...userData, username: e.target.value })
            }
          />
          <input
            placeholder="Email"
            type="email"
            className="form-control mb-2"
            value={userData.email}
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
          />
          <button type="submit" className="btn btn-success">Update</button>
        </form>
      </div>
    </div>
  );
}

export default UpdateUser;
