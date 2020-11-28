import React,{useState} from 'react';
import axios from "axios";
import './App.css';
import FormatDate from "./FormatDate.js";
import FormatHours from "./FormatHours.js";


export default function DefaultCityWeather(props) {

return (
  <div>
        <div className="today">
          <div className="row">
            <div className="col-sm-6">
              <p>Last Update <FormatDate timestamp={props.output.lastUpdate} /> <FormatHours timestamp ={props.output.lastUpdate} /> </p>
              <h1 className="currentCity">{props.output.name}</h1>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <div className="card-body">
                <h3 className="currentTemp">{props.output.temperature} </h3>
                <h6 className="feelslike">Feels like {props.output.feelslike}°F</h6>
                <p className="sunrise">
                  <span role="img" aria-label="sunrise">
                    🌄 : <FormatHours timestamp= {props.output.sunrise} />
                  </span>
                </p>
                <p className="sunset">
                  <span role="img" aria-label="sunset">
                    🌇: <FormatHours timestamp={props.output.sunset} />
                  </span>
                </p>
              </div>
            </div>

            <div className="col">
              <div className="card-body">
                <h4>{props.output.description}</h4>
                <h4>
                  <img src={props.output.image} alt={props.output.description} />
                </h4>
              </div>
            </div>

            <div className="col">
              <div className="card-body">
                <h4>
                  <span role="img" aria-label="wind">
                    🌬 {props.output.wind}
                    {""}MPH
                  </span>{" "}
                </h4>
                <h4>
                  <span role="img" aria-label="humidity">
                    💧 {props.output.humidity}%{""}Humidity{" "}
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