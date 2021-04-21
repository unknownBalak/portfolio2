import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <div className="app">
      <div className="container ">
        <div className="circle"></div>
      </div>
      <Router>
        <Home />
      </Router>
    </div>
  );
}

export default App;
