import React from "react";
import WeatherIcon from "./WeatherIcon";


export default function ForecastReturn(props) {
   function hours() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    return `${hours}:00`;
  }

  function temperature() {
    let temperature = Math.round(props.data.main.temp);
    
    return `${temperature}°F`;
  }


  return (
    <div className="WeatherForecastPreview">
    <div className ="col-3"> 
    <div className ="hour">{hours()}</div>
    <WeatherIcon code={props.data.weather[0].icon} />
    {temperature()}
    </div>
      </div> 
  );
}