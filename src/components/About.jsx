import React from "react";
import "./css/about.css";
import { HashLink as Link } from "react-router-hash-link";
function About() {
  return (
    <div className="about" id="about">
      <div className="title">
        <hr className="hr " /> <span>about me</span>
        <hr className="hr" />
      </div>

      <div className="aboutMe">
        <div className="image">
          <div className="img1">
            <img src="https://placeholder/200" alt="placeholder" />
          </div>
        </div>
        <div className="description">
          <h2>Who I am </h2>
          <div>
            <p>
              Hi! I’m sushank , Pursuing B.S.c(M.ST.CS) computer science. I am self-taught
              Programmer, Developer.{" "}
            </p>
            <p>
              I’m based in Karnataka, Bangalore, India. I enjoy building, learning &#38; exploring
              things that live in the web. I love designing wesites and am looking foward for more
              opportunites to work
            </p>
          </div>
        </div>
      </div>
      <div className="education">
        <h1>Education</h1>
        <div className="academic">
          <p>Lotus eye academy School</p>
          <p>Durga Laxmi Higher Secondary school </p>
          <p>
            Bachelor of Science (<span className="branch">M.St.Cs</span>) @Reva University Bangalore
            India
          </p>
        </div>
      </div>

      <Link className="top" smooth to="#top">
        Top
      </Link>
    </div>
  );
}

export default About;
