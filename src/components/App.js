import React, { useState, useEffect } from "react";
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Projects from "./pages/Projects"
import About from "./pages/About";
import {Route} from "react-router-dom";
import NavBar from "./layout/NavBar";
import Login from "./auth/Login";
import Register from "./auth/Register";
import "./style.css";
import UserContext from "./context/UserContext";
import Axios from "axios";
// import Shapes from "./Shapes";

function App() {

  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenRes = await Axios.post(
        "http://localhost:50/users/tokenIsValid", 
        null,
        {
          headers: { "x-auth-token": token }
        } 
      );
      if (tokenRes.data) {
        const userRes = await Axios.get("http://localhost:50/users", 
        {
          headers: { "x-auth-token": token}
        });
        setUserData({
          token,
          user: userRes.data
        })
      }
    }
    checkLoggedIn();
  }, []);

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      <div className="App">
        < NavBar/>
        <div className="container">
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </div>
      </div>
    </UserContext.Provider>
  );
}

export default App;
