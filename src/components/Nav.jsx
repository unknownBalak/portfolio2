import React from "react";
import "./css/nav.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="nav">
      <ul className="navBarLeft">
        <li className="logo">sk</li>
      </ul>
      <ul className="navBarRight">
        <li>
          <Link> AboutMe </Link>
        </li>
        <li>
          <Link> Skills </Link>
        </li>
        <li>
          <Link> Contact </Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
