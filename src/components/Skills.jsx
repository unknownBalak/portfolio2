import React from "react";
import "./css/skills.css";
import html from "./resources/skills/html.svg";
import figma from "./resources/skills/figma.svg";
import excel from "./resources/skills/excel.svg";
import javascript from "./resources/skills/javascript.svg";
import mysq from "./resources/skills/mysq.svg";
import cssIcon1 from "./resources/skills/cssIcon1.png";
import { HashLink as Link } from "react-router-hash-link";

function Skills() {
  return (
    <div className="skills" id="skill">
      <h1> My Skills</h1>
      <div className="achievement">
        <p className="achievementTitle">Look What I can Do</p>
        <div className="skill">
          <img src={html} alt="html" />
          <img src={cssIcon1} alt="cssIcon1" />
          <img src={javascript} alt="javascript" />
          <img src={figma} alt="figma" />
          <img src={mysq} alt="mysq" />
          <img src={excel} alt="excel" />
        </div>
      </div>
      <Link className="top" smooth to="#top">
        Top
      </Link>
    </div>
  );
}

export default Skills;
