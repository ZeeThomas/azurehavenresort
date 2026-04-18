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
             <img src="https://www.shutterstock.com/image-photo/tropical-summer-background-plaster-wall-260nw-2620817057.jpg" />
             <h1>hotel room name</h1>
             <p>brief descriptions</p>
             <div id="card-buttons">
               <p>See Detail</p>
               <p>Book now</p>
             </div>
           </div>
          </div>
        </div>
        
    );
}