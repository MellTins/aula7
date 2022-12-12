import { Outlet } from "react-router-dom";

import Navbar from "./components/Navbar";

import "./App.css";

import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
