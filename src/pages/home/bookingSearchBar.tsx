import '../../styles/bookingSearchBar.css';
import React, {useState} from "react";
import {format, getMonth,getYear, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, isSameMonth, isSameDay} from "date-fns";
//assets
import calIcon from "../../assets/calendar.png";
import personIcon from "../../assets/person.png";
import drowdownIcon from "../../assets/arrow_drop_down.png"
import search from "../../assets/search.png";
import leftArrow from "../../assets/chevron_left.png"
import rightArrow from "../../assets/chevron_right.png"
export const BookingSearchBar = () =>
{

    const [isDropDownOpen, setIsDropdownOpen] = useState<boolean>(false);
    const [isCheckInOpen, setIsCheckInOpen] = useState<boolean>(false);
    const [isCheckOutOpen, setIsCheckOutOpen] = useState<boolean>(false);
    const [numRooms, setNumRooms] = useState<number>(1);
    const [numAdults, setNumAdults] = useState<number>(1);
    const [numChildren, setNumChildren] = useState<number>(1);
    const [days, setDays] = useState<(Date | null)[]>([]);
    const today = new Date();
    const [calendarDate, setCalendarDate] = useState<(Date | null)>(today);
    const [checkInDate, setCheckInDate] = useState<(Date| null)>(null);
    const [checkOutDate, setCheckOutDate] = useState<(Date| null)>(null);
    const [isCheckInSelected, setCheckInSelected] = useState<boolean>(false);   
    const [isCheckOutSelected, setCheckOutSelected] = useState<boolean>(false);
    const [hoveredDate, setHoveredDate] = useState<Date| null>(null);

    const decrease = (state:string) =>
    {
        if (state === "room")
        {
            setNumRooms((prev) => prev - 1);
        }
        else if (state === "adult")
        {
            setNumAdults((prev) => prev - 1);
        }
        else if (state === "children")
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
        else if (state === "adult")
        {
            setNumAdults((prev) => prev + 1);
        }
        else if (state === "children")
        {
            setNumChildren((prev) => prev + 1);
        }
    }
    const grabDatesByMonth = (monthDir:string) =>
    {
        let newDate = new Date();
        let year = getYear(calendarDate? calendarDate: today);
        if(monthDir == "past")
        {
            let monthBefore = getMonth(calendarDate? calendarDate: today) -1;
            if (monthBefore >= getMonth(today))
            {
                //this is not too far into the past
                newDate = new Date(year,monthBefore,1);

            }
            else
            {
                //this is a month before the date. So therefore they can't go that back. 
                newDate = today;

            }

        }
        else if(monthDir == "future")
        {
            let monthBefore = getMonth(calendarDate? calendarDate: today) +1;
            newDate = new Date(year,monthBefore,1);
            if (monthBefore >= 13)
            {
                //no such thing as a month 13 set it to 1 increase the year
                year +=1;
                newDate = new Date(year,monthBefore,1);
            }
        }


        let currentDay:Date = startOfMonth(newDate);
       let dates:(Date | null)[]= [];
       for (let i = 0; i < currentDay.getDay()-1; i++) 
        {
            dates.push(null); // Push an empty date
        }
        while (currentDay <= endOfWeek(endOfMonth(newDate)))
        {
            
            dates.push(currentDay)
            currentDay = addDays(currentDay, 1);
           
        }
        console.log("Dayes", dates)
        setCalendarDate(newDate);
        setDays(dates);
    }
    const grabDates = () =>
    {
        let currentDay:Date = startOfMonth(today);
       let dates:(Date | null)[]= [];
       for (let i = 0; i < currentDay.getDay()-1; i++) 
        {
            dates.push(null); // Push an empty date
        }
        while (currentDay <= endOfWeek(endOfMonth(today)))
        {
            
            dates.push(currentDay)
            currentDay = addDays(currentDay, 1);
           
        }
        console.log("Dayes", dates)
        setDays(dates);
    }
    const toggleDropDown = (menu:string) =>
    {
        if (menu === "guest info")
        {
            setIsCheckInOpen(false);
            setIsCheckOutOpen(false);
            setIsDropdownOpen(!isDropDownOpen);
            //console.log("is drop down open? ", !isDropDownOpen);
        }
        if (menu == "check in")
        {
            grabDates();
            setIsDropdownOpen(false);
            setIsCheckOutOpen(false);
            setIsCheckInOpen(!isCheckInOpen);
            console.log("is chech in open? ", isCheckInOpen);
        }
       
        
    }
    const clearOldStyles = () =>
    {
        document.querySelectorAll(".selected").forEach((el)=>
        {
            el.classList.remove(".selected");
        })
    }
    const handleDates =(day:Date|null) =>
    {
        //check in has been selected
        if(isCheckInSelected == true && isCheckOutSelected == true)
        {
            //the dates are properly selected. Assume users want to restart the dates
            setCheckOutDate(null);
            clearOldStyles();
            setCheckInDate(day);
            setCheckInSelected(true);
            setCheckOutSelected(false);
            
            
        }
        else if(isCheckInSelected == false)
        {
            //this is check in
            setCheckInDate(day);
            setCheckInSelected(true);
        }
        else
        {
            setCheckOutDate(day);
            setCheckOutSelected(true);
        }
        
    }
    return (
        <div className="bookingSearchContainer">
            <div className="bar">
                <div className="checkin element" >
                    <button id="check-in-out-button"onClick={()=>toggleDropDown("check in")}>
                    <img src={calIcon}/>
                    <p>{checkInDate? format(checkInDate, "MM/dd/yyyy"): "CHECK IN"}</p></button>
                </div>
                <div className="checkout element">
                    <img src={calIcon} />
                    <p>{isCheckOutSelected && checkOutDate? format(checkOutDate, "MM/dd/yyyy"): "CHECK OUT"}</p> 
                </div>
                <div className="optionChooser">
                    <div className="optionChooserLeft">
                        <img src={personIcon} />
                        {//this onclick will cause the drop down to show which will
                        //become a state variable like isShown 
                        //those will show a list of the same componenet
                        //so maybe 1 componenet * 3 in another component
                        }
                    
                        <button className="searchOptions" onClick={()=>toggleDropDown("guest info")}>{numAdults?numAdults: "0"} ADULTS - {numChildren?numChildren: "0"} CHILDREN - {numRooms?numRooms: "0"} ROOM <img src={drowdownIcon} /></button>
                        

                    </div>
                    
                    <div className="searchContainer ">
                        <button className="searchButton">Search </button>
                        <img src={search}/>
                    </div>
                </div>
            </div>
            <div className="moreSearchOptions">
                {/* Guest Info section*/}
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
                    {/*Check In info*/}
                    {isCheckInOpen &&
                        <div className="checkinContainer">
                            <div className="cal-top-bar">
                                <img onClick={()=>grabDatesByMonth("past")}src={leftArrow} alt="left arrow icon" />
                                <h3>{calendarDate?format(calendarDate, "MMMM"): "Err"}</h3>
                                <img onClick={()=>grabDatesByMonth("future")}src={rightArrow} alt="right arrow icon" />
                            </div>
                            <div className="calendar">
                                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => (
                                    <div key={d} className="dayOfWeek-bar">{d}</div>
                                ))}
                                {days.map((day:(Date|null), index) => (
                                    <div
                                    key={index}
                                    className={` day && !isSameMonth(day, currentDate) ? "dimmed" : ""} 
                                    ${
                                        day && isSameDay(day, new Date()) ? "today" : ""
                                    }
                                    ${
                                        day?checkInDate && isSameDay(day, checkInDate)? "selected": "": ""
                                    }
                                    ${
                                        day?checkOutDate && isSameDay(day, checkOutDate)? "selected": "": ""
                                    }
                                    ${
                                        day?hoveredDate && isSameDay(day, hoveredDate)? "hovered": "": ""    } 
                                    ${
                                            day &&checkInDate && hoveredDate? day > checkInDate && day <hoveredDate? "range":"": "" }                              }
                                    `}
                                    onClick={()=>handleDates(day)}
                                    onMouseEnter={()=>isCheckOutSelected? "" : setHoveredDate(day)}
                                    //onMouseLeave={()=>setIsHovered(false)}
                                    >
                                        {day? format(day, "d"): " "}
                                        </div>
                                ))}
                            </div>
                        </div>
                        
                    }
            </div>
        </div>    
        
    );
}