import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Navbar/>
      <App />
    </Router>
  </React.StrictMode>
);
