/*
import React, { useState } from "react";

export default function ConvertTemperature(props) {
  let [temperature, setTemperature] = useState(props.temperature);

  function fahrenheitTemperature(event) {
    event.preventDefault();
    setTemperature(props.temperature);
  }

  function celsiusTemperature(event) {
    event.preventDefault();
    setTemperature(Math.round((props.temperature-32)/1.8));
  }

  return (
    <div class="City">
      {temperature}
      <a href="/" onClick={celsiusTemperature}>
        °C
      </a>{" "}
      |
      <a href="/" onClick={fahrenheitTemperature}>
        °F
      </a>{" "}
          </div>
  );
}

*/