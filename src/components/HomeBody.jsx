import React from "react";
import "./css/homeBody.css";
import downloadIcon from "./resources/downloadIcon.jpeg";
function HomeBody() {
  return (
    <div className="homeBody">
      <div className="homeBodyLeft">
        <p>Hello, My Name is</p>
        <h1>Sushank Kadayat</h1>
        <p>
          And I am a <span className="hl">Web Designer</span>
        </p>
      </div>
      <div className="homeBodyRight">
        <div className="image">
          <div className="img1">
            <img src="https://placeholder/200" alt="placeholder" />
          </div>
        </div>
        <div className="boxOfResume">
          <h3>Download resume</h3>
          <img src={downloadIcon} alt="downloadImg" />
        </div>
      </div>
    </div>
  );
}

export default HomeBody;
