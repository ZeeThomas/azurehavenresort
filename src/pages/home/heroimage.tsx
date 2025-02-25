import '../../styles/heroimage.css';
import React from "react";
import lobbyImage from "../../assets/lobbyImage.jpg"
import {BookingSearchBar} from "./bookingSearchBar"
export const Heroimage = () =>
{
    return(
        <div className="hero-container">
            <img className="lobby-image" src={lobbyImage}/>
            <div className="hero-text">
                <h1>Welcome</h1>
            </div>
            <div className="searchBar">
                <BookingSearchBar  />
            </div>
        </div>
        
    );
}