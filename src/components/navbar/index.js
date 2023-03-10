import React from "react";
import { NavLink } from "react-router-dom";


export default function Navbar() {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" >
                            Index Page
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/button" >
                            Button Page
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/card" >
                            Card Page
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </>
    );
}
