import '../styles/navbar.css';
import hamIcon from "../assets/menu.png"
import calIcon from "../assets/calendar.png"
import React from "react";
import {useRef} from "react";
export const Navbar = () =>
{
    var navRef =useRef<HTMLDivElement | null>(null);

    const openMenu = () =>
    {
        console.log("click");
       if (navRef.current)
       {
            if(navRef.current.className === "nav")
            {
                navRef.current.className += " responsive";
            }
            else
            {
                navRef.current.className = "nav";
            }
       }
    }
    return (
        <div className="navigation-container" >
            <img className="ham-icon"src={hamIcon} onClick={()=>openMenu()}/>
            <div className="nav" ref={navRef}>
                <a href="#">Home</a>
                <a href="#">Rooms</a>
                <a href="#" >Facilities</a>
                <a href="#">Wedding</a>
                <a href="#">Around Us</a>
            </div>
            <button className="booking-btn">Booking<img className="calIcon" src={calIcon}/></button>
        </div>
    );
}