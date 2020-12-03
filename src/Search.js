import React, {useState} from 'react';
import axios from "axios";
import WeatherData from "./WeatherData"
import Forecast from "./Forecast";
//import WeatherIcon from "./WeatherIcon";

import './App.css';


export default function Search(props) {
  const [city, setCity] = useState(props.city);
  const [weather, setWeather] = useState({loaded:false});
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
    let units = "imperial";
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
      <div>
        <form className="form-inline"  onSubmit={handleSubmit}>
          <span className="form-group mb-2">
            <input className="form-control-sm"
            type="search"
            placeholder="EnterMajorCity"
            onChange={updateCity}
          /> </span>
          <span>
            <button type="submit" className="btn btn-primary mb-2">Search</button>
          </span>
        <span>
          <button className="btn btn-primary mb2">SearchCurrentLocation</button>
        </span> 

        </form>{" "}

      </div>
    </div>
  );

  if (weather.loaded) {
    return (
      <div>
        {form}
        <WeatherData data={weather} />
        <Forecast city={weather.name} />
      </div>
    );
 } else { Searching();

  return "...loading";}
 
}
