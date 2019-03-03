import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import { BrowserRouter as Router } from "react-router-dom";
import './style/style.scss';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
