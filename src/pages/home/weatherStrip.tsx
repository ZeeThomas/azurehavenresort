import React, {useState, useEffect} from "react";

export const WeatherStrip = () =>
{
    const [weatherData, setWeatherData] = useState({});
    const [bermudaTimeData, setBermudaTimeData] = useState<{ hour?: number }>({});
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
        else if (bermudaTimeData.hour !== undefined && bermudaTimeData.hour >=12 && bermudaTimeData.hour <=18)
        {
            return("Good Afternnon")
        }
        else if(bermudaTimeData.hour !== undefined && bermudaTimeData.hour >=20)
        {
            return("Good Night")
        }
        else
        {
            return("Good Evening")
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
            console.log(data)
            setBermudaTimeData(data);
        })
        .catch((err)=>
        {
            console.log(err.message);
        })
    },[])

    return (
        <div className="weatherStripContainer">
            <h2>{getTimeOfDayGreeting()}</h2>
        </div>
    );
}