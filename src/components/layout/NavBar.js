import React from "react"
import {Link} from "react-router-dom"
import AuthOptions from "../auth/AuthOptions"

function NavBar() {
    return (
        <header id="header">
                <li>
                    <Link to="/"> <h1 className="title" >MERN auth todo app</h1> </Link>
                </li>
                {/* <li>
                    <Link to="/about">About</Link> 
                </li> */}
                {/* <li>
                    <Link to="/projects">Projects</Link> 
                </li>
                <li>
                    <Link to="/contact">Contact</Link> 
                </li> */}
                <AuthOptions /> 
        </header>
        
    )
}

export default NavBar;