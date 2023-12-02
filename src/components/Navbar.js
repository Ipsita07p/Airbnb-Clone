import React from "react";
import Airbnb from "../images/airbnb-logo.png"

export default function Navbar() {
    return (
        <nav>
            <img src= {Airbnb} className="nav--logo" />
        </nav>
    )
}