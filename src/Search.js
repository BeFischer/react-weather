import React, {useState} from 'react';
import axios from "axios";
import FormatDate from "./FormatDate.js";
import FormatHours from "./FormatHours.js";
//import DefaultCityWeather from "./DefaultCityWeather";
//import DefaultCity from "./DefaultCity";

import './App.css';


export default function Search() {
  const [city, setCity] = useState();
  const [weather, setWeather] = useState({});
  const [loaded, setLoaded] = useState(false);
  console.log(city);

  function showWeather(response) {
    setLoaded(true);
    setWeather({
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

  function Searching(event) {
    event.preventDefault();
    let apiKey = "cfeef4d0b0e86d888145aca4caf511b0";
    let units = "imperial";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showWeather);
    console.log(apiUrl);
  }

  function updateCity(event) {
    setCity(event.target.value);
    console.log(city);
  }

  let form = (
    <div className="SearchLocation">
      {" "}
      <div className="row">
        <form className="byCity" onSubmit={Searching}>
          <input
            type="search"
            placeholder="EnterMajorCity"
            onChange={updateCity}
          />
          <span className="form-group col-sm-4">
            <button type="submit">Search</button>
          </span>
        </form>{" "}
        <span>
          <button>SearchCurrentLocation</button>
        </span>
      </div>
    </div>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <div className="today">
          <div className="row">
            <div className="col-sm-6" id="current-time">
              <p>Last Update <FormatDate timestamp={weather.lastUpdate} /> <FormatHours timestamp={weather.lastUpdate}/> </p>
              <h1 className="currentCity">{weather.name}</h1>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <div className="card-body">
                <h3 className="currentTemp">{weather.temperature}°F|°C</h3>
                <h6 className="feelslike">Feels like {weather.feelslike}°F</h6>
                <p className="sunrise">
                  <span role="img" aria-label="sunrise">
                    🌄 :<FormatHours timestamp= {weather.sunrise} />
                  </span>
                </p>
                <p className="sunset">
                  <span role="img" aria-label="sunset">
                    🌇: <FormatHours timestamp={weather.sunset} />
                  </span>
                </p>
              </div>
            </div>

            <div className="col">
              <div className="card-body">
                <h4>{weather.description}</h4>
                <h4>
                  <img src={weather.image} alt={weather.description} />
                </h4>
              </div>
            </div>

            <div className="col">
              <div className="card-body">
                <h4>
                  <span role="img" aria-label="wind">
                    🌬 {weather.wind}
                    {""}MPH
                  </span>{" "}
                </h4>
                <h4>
                  <span role="img" aria-label="humidity">
                    💧 {weather.humidity}%{""}Humidity{" "}
                  </span>
                </h4>
                <h4>
                  <span role="img" aria-label="uV">
                    🔆8{" "}uV
                  </span>
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="forecast">
            <h5>forecast for the next hours...</h5>
          </div>
        </div>
      </div>
    );
  } else {
     let city = "New York";
    let apiKey = "cfeef4d0b0e86d888145aca4caf511b0";
    let units = "imperial";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showWeather);
    return (
    <div>form</div> );
  }
}
