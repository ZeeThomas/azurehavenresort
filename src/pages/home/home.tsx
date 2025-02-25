import React from "react";
import {Navbar} from "../navbar"
import {Heroimage} from "./heroimage"
import {WeatherStrip} from "./weatherStrip"
export const Home = () => 
{
    return (
        <div className="home-container">
            <Navbar />
            <Heroimage />
            <WeatherStrip />
        </div>
    );
}