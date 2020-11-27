import React,{useState} from 'react';
import axios from "axios";
import './App.css';
import FormatDate from "./FormatDate.js";
import FormatHours from "./FormatHours.js";
import ConvertTemperature from "./ConvertTemperature.js";


export default function DefaultCity(props) {
 
  const [output,setOutput]=useState({});

    let city=(props.city);
    let apiKey = "cfeef4d0b0e86d888145aca4caf511b0";
    let units = "imperial";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showResponse);

function showResponse(response) {
    setOutput({
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

return (
  <div>
        <div className="today">
          <div className="row">
            <div className="col-sm-6">
              <p>Last Update <FormatDate timestamp={output.lastUpdate} /> <FormatHours timestamp ={output.lastUpdate} /> </p>
              <h1 className="currentCity">{output.name}</h1>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <div className="card-body">
                <h3 className="currentTemp"><ConvertTemperature temperature = {output.temperature}/> </h3>
                <h6 className="feelslike">Feels like {output.feelslike}°F</h6>
                <p className="sunrise">
                  <span role="img" aria-label="sunrise">
                    🌄 : <FormatHours timestamp= {output.sunrise} />
                  </span>
                </p>
                <p className="sunset">
                  <span role="img" aria-label="sunset">
                    🌇: <FormatHours timestamp={output.sunset} />
                  </span>
                </p>
              </div>
            </div>

            <div className="col">
              <div className="card-body">
                <h4>{output.description}</h4>
                <h4>
                  <img src={output.image} alt={output.description} />
                </h4>
              </div>
            </div>

            <div className="col">
              <div className="card-body">
                <h4>
                  <span role="img" aria-label="wind">
                    🌬 {output.wind}
                    {""}MPH
                  </span>{" "}
                </h4>
                <h4>
                  <span role="img" aria-label="humidity">
                    💧 {output.humidity}%{""}Humidity{" "}
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
}