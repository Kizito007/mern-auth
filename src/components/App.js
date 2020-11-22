import React from "react";
import Home from "./Home"
import Contact from "./Contact"
import Projects from "./Projects"
import About from "./About";
import {Route, Link} from "react-router-dom";
import NavBar from "./NavBar";
// import Shapes from "./Shapes";

function App() {
  return (
    <div className="App">
      < NavBar/>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/contact" component={Contact} />
    </div>
  );
}

export default App;