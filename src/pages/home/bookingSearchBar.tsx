import '../../styles/bookingSearchBar.css';
import React, {useState} from "react";
import calIcon from "../../assets/calendar.png";
import personIcon from "../../assets/person.png";
import drowdownIcon from "../../assets/arrow_drop_down.png"
import search from "../../assets/search.png";
export const BookingSearchBar = () =>
{

    const [isDropDownOpen, setIsDropdownOpen] = useState<boolean>(false);
    const [numRooms, setNumRooms] = useState<number>(1);
    const [numAdults, setNumAdults] = useState<number>(1);
    const [numChildren, setNumChildren] = useState<number>(1);

    const decrease = (state:string) =>
    {
        if (state == "room")
        {
            setNumRooms((prev) => prev - 1);
        }
        else if (state == "adult")
        {
            setNumAdults((prev) => prev - 1);
        }
        else if (state == "children")
        {
            setNumChildren((prev) => prev - 1);
        }
    }
    const increase = (state:string) =>
    {
        if (state == "room")
        {
            setNumRooms((prev) => prev + 1);
        }
        else if (state == "adult")
        {
            setNumAdults((prev) => prev + 1);
        }
        else if (state == "children")
        {
            setNumChildren((prev) => prev + 1);
        }
    }
    const toggleDropDown = () =>
    {
        setIsDropdownOpen(!isDropDownOpen);
        //console.log("is drop down open? ", !isDropDownOpen);
    }
    return (
        <div className="bookingSearchContainer">
            <div className="bar">
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
                    
                        <button className="searchOptions" onClick={()=>toggleDropDown()}>0 ADULTS - 0 CHILDREN - 0 ROOM <img src={drowdownIcon} /></button>
                        

                    </div>
                    
                    <div className="searchContainer ">
                        <button className="searchButton">Search </button>
                        <img src={search}/>
                    </div>
                </div>
            </div>
            <div className="moreSearchOptions">
                {isDropDownOpen &&
                        <div className="dropDownMenu">
                            <p>Maximum 3 Guest Per Room</p>
                            <div className="dropDownItem">
                                <div className="sectionInfo">
                                    <h3>Rooms</h3>
                                    <p>(Max: 3 Rooms/person)</p>
                                </div>
                                <div className="valueChanger">
                                    <button onClick={()=>decrease("room")}>-</button>
                                    <p>{numRooms}</p>
                                    <button onClick={()=>increase("room")}>+</button>
                                </div>
                            </div>
                            <div className="dropDownItem">
                                <div className="sectionInfo">
                                    <h3>Adults</h3>
                                    <p>(Max: 8 total guests/Room)</p>
                                </div>
                                <div className="valueChanger">
                                    <button onClick={()=>decrease("adult")}>-</button>
                                    <p>{numAdults}</p>
                                    <button onClick={()=>increase("adult")}>+</button>
                                </div>
                            </div>
                            <div className="dropDownItem">
                                <div className="sectionInfo">
                                    <h3>Children</h3>
                                    <p>(Max: 8 total guests/Room)</p>
                                </div>
                                <div className="valueChanger">
                                    <button onClick={()=>decrease("children")}>-</button>
                                    <p>{numChildren}</p>
                                    <button onClick={()=>increase("children")}>+</button>
                                </div>
                            </div>
                        </div>
                    }
            </div>
        </div>    
        
    );
}