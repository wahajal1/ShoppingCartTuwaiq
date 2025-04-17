import React, { useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import { Bounce, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function AddUser() {
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();

  const notify = () =>
    toast("User added successfully!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      theme: "colored",
      transition: Bounce,
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3000/users", userData);
    notify();
    navigate("/user");
  };

  return (
    <div>
      <Header />
      <div className="container">
        <h1>Add User</h1>
        <form onSubmit={handleSubmit}>
          <input placeholder="Name" className="form-control mb-2"
            onChange={(e) => setUserData({ ...userData, name: e.target.value })} />
          <input placeholder="Username" className="form-control mb-2"
            onChange={(e) => setUserData({ ...userData, username: e.target.value })} />
          <input placeholder="Email" type="email" className="form-control mb-2"
            onChange={(e) => setUserData({ ...userData, email: e.target.value })} />
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default AddUser;
