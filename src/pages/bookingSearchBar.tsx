import '../styles/bookingSearchBar.css';
import calIcon from "../assets/calendar.png";
import personIcon from "../assets/person.png";
import drowdownIcon from "../assets/arrow_drop_down.png"
import search from "../assets/search.png";
export const BookingSearchBar = () =>
{



    return (
    
        <div className="bookingSearchContainer">
            <div className="checkin element" >
                <img src={calIcon}/>
                <p>CHECK IN</p>
            </div>
            <div className="checkout element">
               <img src={calIcon} />
               <p>CHECK OUT</p> 
            </div>
            <div className="optionChooser">
                <div className="optionChooserLeft">
                    <img src={personIcon} />
                    {//this onclick will cause the drop down to show which will
                    //become a state variable like isShown 
                    //those will show a list of the same componenet
                    //so maybe 1 componenet * 3 in another component
                    }
                
                    <button className="searchOptions">0 ADULTS - 0 CHILDREN - 0 ROOM </button>
                    <img src={drowdownIcon} />
                </div>
               
               <div className="searchContainer ">
                    <button className="searchButton">Search </button>
                    <img src={search}/>
                </div>
            </div>
           
        </div>    
    );
}