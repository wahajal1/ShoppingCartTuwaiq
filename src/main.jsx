import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import DashBoard from "./pages/Dashboard.jsx";
import { BrowserRouter, Route, Routes } from "react-router";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import "../node_modules/bootstrap/dist/js/bootstrap.js";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>

      <Route path="/dashboard" element={<DashBoard />}></Route>

      <Route></Route>
      <Route></Route>
    </Routes>
  </BrowserRouter>
);
