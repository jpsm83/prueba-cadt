import React from "react";
import { Link } from "react-router-dom";
// import "./Home.scss";

export default function Home() {
  return (
    <div>
      <Link to="/designs">Designs</Link>
      <Link to="/setouts">Setouts</Link>
    </div>
  );
}
