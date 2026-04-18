import React from "react";
import {Navbar} from "../navbar"
import {Heroimage} from "./heroimage"
import {Bookingbar} from "./bookingbar"
//import {WeatherStrip} from "./weatherStrip"
export const Home = () => 
{
    return (
        <div className="home-container">
            <Navbar />
            <Heroimage />
            {/*<WeatherStrip /> */}
        </div>
    );
}