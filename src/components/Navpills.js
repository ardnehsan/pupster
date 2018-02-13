import React from "react";
import { Link } from "react-router-dom";

const Navpills = () =>
  <ul className="nav nav-tabs">
    <li className={window.location.pathname === "/" ? "active" : ""}>
      <Link to="/">Pupster</Link>
    </li>
    <li className={window.location.pathname === "/About" ? "active" : ""}>
      <Link to="/About">About</Link>
    </li>
    <li className={window.location.pathname === "/Search" ? "active" : ""}>
      <Link to="/Search">Search</Link>
    </li>
    <li className={window.location.pathname === "/Discover" ? "active" : ""}>
      <Link to="/Discover">Discover</Link>
    </li>

  </ul>;

export default Navpills;
