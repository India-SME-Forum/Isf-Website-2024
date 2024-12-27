import "./App.css";
import Navbar from "./components/navbar";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Homepage from "./pages/Homepage";
function App() {
  return (
    <div>
      <Homepage />
    </div>
  );
}

export default App;
