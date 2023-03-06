import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <>
            <ul>
                <li>
                    <NavLink to="/" activeStyle>
                        Index Page
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/button" activeStyle>
                        Button Page
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/card" activeStyle>
                        Card Page
                    </NavLink>
                </li>
            </ul>
        </>
    );
}
