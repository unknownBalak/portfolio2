import React from "react";
import Nav from "./Nav";
import HomeBody from "./HomeBody";
import "./css/Home.css";
function Home() {
  return (
    <div className="home">
      <Nav />
      <HomeBody />
    </div>
  );
}

export default Home;
