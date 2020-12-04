import React, { useState } from "react";

export default function ConvertTemperature(props) {
  const [unit, setUnit]=useState("degsF");


  function fahrenheitTemperature(event) {
    event.preventDefault();
    setUnit("degsF");
  }

  function celsiusTemperature(event) {
    event.preventDefault();
    setUnit("degsC");
  }

  function convertToC(){
    return ( Math.round((props.degrees-32)/1.8))};


if (unit === "degsF") {
  return (
    <div className = "CityTemperature">
     <span className="col-sm-6 currentTemp">{Math.round(props.degrees)} <span className="unit">°F
          <a href="/" onClick={celsiusTemperature}>°C</a>{" "}</span></span>
    </div>
  );
} else {

    return (    
    <div className = "CityTemperature">
     <span className="col-sm-6 currentTemp">{convertToC()} <span className="unit">
       <a href="/" onClick={fahrenheitTemperature}>°F</a>°C</span></span>
    </div>
    );
  }
}

