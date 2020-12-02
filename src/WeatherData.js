import React from 'react';
import FormatDate from "./FormatDate.js";
import FormatHours from "./FormatHours.js";
import ConvertTemperature from "./ConvertTemperature";



export default function WeatherData(props) {
    return (  <div className = "todaysData">
        <div className="today">
          <div className="row">
            <div className="col-sm-6 currentTime">
              <p>Last Update <FormatDate timestamp={props.data.lastUpdate} /> <FormatHours timestamp={props.data.lastUpdate}/> </p>
            </div>
          </div>

           <div className="row">
            <div className="col-sm-3 currentCity"> {props.data.name}</div>
            </div>

            <div className="row">
            <ConvertTemperature degrees={props.data.temperature} /> 
            </div>

             <div className="row">
            <div className="col-sm-12 feelslike">Feels like {props.data.feelslike}°F</div>
            </div>

              <div className="row">
               <div className="col-sm-12 sunrisesunset">
                  <span role="img" aria-label="sunrise">
                    🌄 :<FormatHours timestamp= {props.data.sunrise} />
                  </span>
                  <span role="img" aria-label="sunset">
                    🌇: <FormatHours timestamp={props.data.sunset} />
                  </span>
               </div>
            </div>          

          <div className="row">

            <div className="col">
              <div className="card-body">
                <ul className = "description">
                <li className = "text-capitalize">{props.data.description}</li>
                <li>
                  <img src={props.data.image} alt={props.data.description} />
                </li>
                </ul>
              </div>
            </div>

            <div className="col">
              <div className="card-body">
                <ul className="windHumidity">
                <li>
                  <span role="img" aria-label="wind">
                    🌬 {props.data.wind}
                    {""}MPH
                  </span>{" "}
                </li>
                <li>
                  <span role="img" aria-label="humidity">
                    💧 {props.data.humidity}%{""}Humidity{" "}
                  </span>
                </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div>

          <div className="forecast">
            <h5>forecast for the next hours...</h5>
          </div>
        </div>
</div>);}
  
