import { createContext, useState } from "react";
import "./App.css";
import HomePage from "./pages/Home";

export const appContext = createContext([]);

function App() {
  const [cart, setCart] = useState([]);

  return (
    <>
      <appContext.Provider value={cart}>
        <HomePage />
      </appContext.Provider>
    </>
  );
}

export default App;
