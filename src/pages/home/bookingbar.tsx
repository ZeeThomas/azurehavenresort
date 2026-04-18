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
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNMoAyyyXY_nTxHWgtOx7e047ikCMQI8yKNg&s" />
             <h1>hotel room name</h1>
             <div>
               <p>brief descriptions</p>
             </div>
             
             <div id="card-buttons">
               <p>See Detail</p>
               <p>Book now</p>
             </div>
           </div>
          </div>
        </div>
        
    );
}