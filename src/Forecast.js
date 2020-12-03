import React, { useState } from "react";
import axios from "axios";
import ForecastReturn from "./ForecastReturn";


export default function Forecast(props) {
const [loaded,setLoaded]=useState(false);
const[forecast,setForecast]=useState();

function displayForecast(response){
    setForecast(response.data);
    setLoaded(true);
    console.log(response.data);
    }

if (loaded && props.city === forecast.city.name){
    return ( 
    <div className = "row">
    <div className ="col"> 
        <ForecastReturn  data = {forecast.list[0]} />
    </div>
    </div> );
} else {
const apiKey = "cfeef4d0b0e86d888145aca4caf511b0";
  let units = "imperial";
  let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(displayForecast);

    return ( <div> hello</div> )
};
}