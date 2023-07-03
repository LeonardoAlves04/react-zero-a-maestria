import React from 'react'
import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <div>Navbar
            <NavLink to={"/"}>
                <button>Home</button>
            </NavLink>
            <NavLink to={"/About"}>
                <button>About</button>
            </NavLink>
            <NavLink to={"/Contact"}>
                <button>Contact</button>
            </NavLink>
        </div>
    )
}

export default Navbar