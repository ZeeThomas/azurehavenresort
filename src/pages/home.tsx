import React from "react";
import {Navbar} from "./navbar"
import {Heroimage} from "./heroimage"
export const Home = () => 
{
    return (
        <div className="home-container">
            <Navbar />
            <Heroimage />
        </div>
    );
}