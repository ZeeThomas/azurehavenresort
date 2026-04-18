import '../../styles/bookingbar.css';
import React from "react";

export const Bookingbar = () =>
{
    return(
        <div className="booking-bar">
          <span id="heading-text">Your Dream <br />
                Luxurious Hotel Room
          </span>
          <p id="small-text">Relax in style at The Azure Haven Resort, where modern comfort meets tropical oasis</p>
          <div id="rooms">
           <div className="card">
             
             <h1>hotel room name</h1>
           </div>
          </div>
        </div>
        
    );
}