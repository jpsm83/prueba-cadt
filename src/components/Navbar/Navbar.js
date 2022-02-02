import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navContainer">
      <Link className="link" to="/designs">
        Designs
      </Link>
      <Link className="link" to="/setouts">
        Setouts
      </Link>
    </div>
  );
}
