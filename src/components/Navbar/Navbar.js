import React from "react";
import { NavLink } from "react-router-dom";
// import "./Navbar.scss";

export default function Navbar() {
  return (
    <div>
      <NavLink to="/designs">Designs</NavLink>
      <NavLink to="/setouts">Setouts</NavLink>
    </div>
  );
}
