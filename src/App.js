import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import routes from "./routes";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            <span>
              <Link to="/home"> Home. </Link>
            </span>
            <span>
              <Link to="/about"> About. </Link>
            </span>
            <span>
              <Link to="/contact"> Contact. </Link>
            </span>
            <span>
              <Link to="/other"> Other. </Link>
            </span>
          </div>
        </header>
        <div>{routes}</div>
      </div>
    );
  }
}

export default App;
