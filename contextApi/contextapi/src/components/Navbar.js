import React from 'react'
import { NavLink } from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
    return (
        <div>
            <h1>Navbar</h1>
            <nav>
                <NavLink to={"/"}>
                    Home
                </NavLink>
                <NavLink to={"/About"}>
                    About
                </NavLink >
                <NavLink to={"/Contact"}>
                    Contact
                </NavLink >
            </nav>
        </div >
    )
}

export default Navbar