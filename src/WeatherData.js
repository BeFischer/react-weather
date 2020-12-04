import React from 'react';
import FormatDate from "./FormatDate.js";
import FormatHours from "./FormatHours.js";
import ConvertTemperature from "./ConvertTemperature";
import WeatherIcon from "./WeatherIcon";



export default function WeatherData(props) {
    return (  <div className = "todaysData">
        <div className="today">
          <div className="row">
            <div className="col-sm-6">
              <p className = "currentTime">Last Update <FormatDate timestamp={props.data.lastUpdate} /> <FormatHours timestamp={props.data.lastUpdate}/> </p>
            </div>
          </div>

           <div className="row">
            <div className="col-6 currentCity"> {props.data.name}</div>
            </div>

            <div className="row currentTemp">
            <ConvertTemperature degrees={props.data.temperature} /> 
            </div>
        

             <div className="row">
             <div className="col-sm-12 feelslike">Feels like:{props.data.feelslike}°F</div>

            </div>

              <div className="row">
               <div className="col-sm-12 sunrisesunset">
                  <span className="sun"><i class="far fa-sun"></i>
                    {" "}<FormatHours timestamp= {props.data.sunrise} />{" "}
                  </span>
                  <span className="sunset"><i class="fas fa-moon"></i>
                    {" "} <FormatHours timestamp={props.data.sunset} />
                  </span>
               </div>
            </div>          

          <div className="row">

            <div className="col-3">
              <div className="card-body">
                <ul className = "sky">
                <li className = "image">
                  <WeatherIcon code ={props.data.icon} />
                </li>
                <li className = "text-capitalize description">{props.data.description}</li>

                </ul>
              </div>
            </div>

            <div className="col-3">
              <div className="card-body">
                <ul className="sky">
                <li>
                    <span className="wind"><i className="fas fa-wind"></i></span>
                </li>
                <li className="windspeed">   {props.data.wind}
                    {" "}MPH</li>
                </ul>
              </div>
            </div>
                
            <div className="col-3">
              <div className="card-body">
                <ul className="sky">
                <li>
                  <span className="humidity"><i class="fas fa-tint"></i></span> </li>
                    <li className = "wet">{props.data.humidity}%{" "}Humidity{" "}</li>
                              </ul>
              </div>
            </div>
          </div>
        </div>
        <div>

        </div>
</div>);}
  
