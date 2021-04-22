import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import { BrowserRouter as Router } from "react-router-dom";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
function App() {
  return (
    <Router>
      <div className="app">
        <div className="bigContainer">
          <div className="container ">
            <div className="circle"></div>
          </div>
          <Home />
        </div>
        <About />
        <Skills />
        <Contact />
      </div>
    </Router>
  );
}

export default App;
