import React from "react";
import "./css/skills.css";
import { HashLink as Link } from "react-router-hash-link";

function Skills() {
  return (
    <div className="skills" id="skill">
      <h1> Hey greeting from skills Page</h1>

      <Link className="top" smooth to="#top">
        Top
      </Link>
    </div>
  );
}

export default Skills;
