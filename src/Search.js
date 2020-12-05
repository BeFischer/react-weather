import React, {useState} from 'react';
import axios from "axios";
import WeatherData from "./WeatherData"
import Forecast from "./Forecast";
//import WeatherIcon from "./WeatherIcon";

import './App.css';


export default function Search(props) {
  const [city, setCity] = useState(props.city);
  const [weather, setWeather] = useState({loaded:false});
  let units = "imperial";

  console.log(city);

  function showWeather(response) {
    console.log(response.data);
    setWeather({
      loaded:true,
      lastUpdate:response.data.dt*1000,
      temperature: Math.round(response.data.main.temp),
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      feelslike: Math.round(response.data.main.feels_like),
      name: response.data.name,
      sunrise: response.data.sys.sunrise * 1000,
      sunset: response.data.sys.sunset * 1000,
      icon: response.data.weather[0].icon,
    });
  }

  function Searching() {
    const apiKey = "cfeef4d0b0e86d888145aca4caf511b0";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showWeather);
  }

function handleSubmit (event){
event.preventDefault();
Searching();}

  function updateCity(event) {
    setCity(event.target.value);
    console.log(city);
  }

  let form = (
    <div className="SearchLocation">
      {" "}
          <div className="row">
        <form className="byCity" onSubmit={handleSubmit}>
      
          <span className="form-group col-sm-3">
            <input
            type="search"
            placeholder="EnterMajorCity"
            autoFocus="on"
            onChange={updateCity}
          /> </span>
          <span className="col-sm-2">
            <button type="submit" >Search</button>
          </span>
         
        </form>{" "}
 </div>
     
    </div>
  );

  if (weather.loaded) {
    return (
      <div>
        {form}
        <WeatherData data={weather} units={units}/>
        <Forecast city={weather.name} />
      </div>
    );
 } else { Searching();

  return "...loading";}
 
}
