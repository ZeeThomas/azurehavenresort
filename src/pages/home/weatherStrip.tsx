import "../../styles/weatherStrip.css"
import locationIcon from "../../assets/location_pin.png";

import React, {useState, useEffect} from "react";

export const WeatherStrip = () =>
{
    const [weatherData, setWeatherData] = useState<{precipitation_probability_max?: number[]; temperature_2m_max?: number[]}>({});
    const [bermudaTimeData, setBermudaTimeData] = useState<{ hour?: number; dayOfWeek?: string}>({});
    const [weatherAnimation, setWeatherAnimation] = useState<string>("sunny");
    const [temp, setTemp] = useState<number>(0);
    const [dayOfWeek, setDayOfWeek] = useState<string>("Loading...");

    const getWeatherAnimation = () =>
    {
            if (bermudaTimeData.hour !== undefined && bermudaTimeData.hour < 6)
            {
                return (
                <div className="animation-side">
                <div className="location-section">
                    <img src={locationIcon}></img>
                    <p>Hamilton, Bermuda</p>
                </div>
                <div className="moon"></div>
                </div>
            );
            }
            else if (weatherData.precipitation_probability_max !== undefined && weatherData.precipitation_probability_max[0] >50)
            {
                return(<h1>rainy</h1>);
            }
            else
            {
                
                return(
                    <div className="animation-side-moon">
                <div className="location-section">
                    <img src={locationIcon}></img>
                    <p>Hamilton, Bermuda</p>
                </div>
                <div className="moon"></div>
            </div>
                    /*
                    <div className="animation-side">
                        <div className="location-section">
                            <img src={locationIcon}></img>
                            <p>Hamilton, Bermuda</p>
                        </div>
                        <span className="dot"></span>
                    </div>
                    */
                );
            }
    }
    const getTimeOfDayGreeting = () =>
    {
        if (bermudaTimeData.hour !== undefined && bermudaTimeData.hour < 6)
        {
            return("Good Night")
        }
        else if(bermudaTimeData.hour !== undefined && bermudaTimeData.hour < 12)
        {
            return("Good Morning!")
        }
        else if (bermudaTimeData.hour !== undefined && bermudaTimeData.hour < 18)
        {
            return("Good Afternnon")
        }
        else if(bermudaTimeData.hour !== undefined && bermudaTimeData.hour < 20)
        {
            return("Good Evening")
        }
        else
        {
            return("Good Night")

        }
    }
   
    useEffect(()=>
    {
        //fetches weather info
        fetch('https://api.open-meteo.com/v1/forecast?latitude=32.3302&longitude=-64.74&current=temperature_2m&hourly=is_day&daily=temperature_2m_max,precipitation_probability_max&temperature_unit=fahrenheit&precipitation_unit=inch')
        .then((response) =>response.json())
        .then((data)=>
        {
            console.log(data);
            setWeatherData(data);
            setTemp(data.daily.temperature_2m_max[0]);
        })
        .catch((err) =>
        {
            console.log(err.message)
        })
        //fetches time info
        fetch('https://timeapi.io/api/time/current/coordinate?latitude=32.375&longitude=-64.75')
        .then((response)=>response.json())
        .then((data)=>
        {
            //console.log(data)
            setBermudaTimeData(data);
            setDayOfWeek(data.dayOfWeek);
        })
        .catch((err)=>
        {
            console.log(err.message);
        })
    },[])

    return (
        <div className="option2-container"> 
            {/*<div className="weatherStripContainer">
                <div className="strip" >
                    {getWeatherAnimation()}
                    <div className="info-side">
                        <h2>{getTimeOfDayGreeting()}</h2>
                        <p>{dayOfWeek}</p>
                        <p>{temp}°F</p>
                    </div>
                    </div> 
                
            </div>*/}
            <div className="location-area">
                    <img src={locationIcon}></img>
                    <p>Hamilton, Bermuda</p>
                    
            </div>
            <div className="time-and-temp">
                        <p>{dayOfWeek}</p>
                        <div className="temp">
                            <span className="little-sun"></span>
                            <p>{temp}°F</p>
                        </div>
                    </div>
        </div>
            
    );
}