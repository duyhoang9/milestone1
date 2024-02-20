import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Navbar = () => {
  return (
    // <nav className="navbar navbar-expand-lg bg-light">
    //   <Link className="nav-link" to="/">
    //     Home
    //   </Link>
    //   <Link to="/chart" activeStyle>
    //     Chart View
    //   </Link>{" "}
    //   <Link to="/table" activeStyle>
    //     Table View
    //   </Link>
    // </nav>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Home
      </Link>
      <div className="navbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/table">
              Tables
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/chart">
              Chart
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
