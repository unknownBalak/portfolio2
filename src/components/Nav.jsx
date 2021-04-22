import React from "react";
import "./css/nav.css";
import { HashLink as Link } from "react-router-hash-link";
function Nav() {
  return (
    <div className="nav">
      <ul className="navBarLeft">
        <li className="logo">sk</li>
      </ul>
      <ul className="navBarRight">
        <li>
          <Link smooth to="#about">
            {" "}
            AboutMe{" "}
          </Link>
        </li>
        <li>
          <Link smooth to="#skill">
            Skills{" "}
          </Link>
        </li>
        <li>
          <Link smooth to="#contact">
            Contact{" "}
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
