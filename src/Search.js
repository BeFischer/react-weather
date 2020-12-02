import React, {useState} from 'react';
import axios from "axios";
import WeatherData from "./WeatherData"


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
      image: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
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
      <div className="row">
        <form className="byCity" onSubmit={handleSubmit}>
          <span className="form-group col-sm-4">
            <input
            type="search"
            placeholder="EnterMajorCity"
            onChange={updateCity}
          /> </span>
          <span className="form-group col-sm-3">
            <button type="submit">Search</button>
          </span>
        <span className="form-group col-sm-3">
          <button>SearchCurrentLocation</button>
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
      </div>
    );
 } else { Searching();

  return "...loading";}
 
}
