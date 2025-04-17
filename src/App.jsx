import { Route, Routes } from "react-router";
import Header from "./components/Header.jsx";
import HomePage from "./pages/Home";
import Cart from "./pages/Cart";
import DashBoard from "./pages/Dashboard.jsx";
import UsersList from "./pages/User.jsx";
import AddUser from "./users/AddUser.jsx";
import UpdateUser from "./users/UpdateUser.jsx";
import "./App.css";
import Login from "./pages/Login.jsx";
import { Bounce, ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Routes>
       <Route path="/users/add" element={<AddUser />} />
       <Route path="/users/update/:id" element={<UpdateUser />} />
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/dashboard" element={<DashBoard />}></Route>
        <Route path="/user" element={<UsersList />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
    </>
  );
}

export default App;
