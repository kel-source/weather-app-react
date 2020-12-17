import axios from "axios";
import React, { useState } from "react";
import "./TodayData.css";

export default function TodayData() {
  const [ready, setReady] = useState(false);
  const [temperature, setTemperature] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [windSpeed, setWindSpeed] = useState(null);
  const [description, setDescription] = useState(null);

  function handleResponse(response) {
    setTemperature(Math.round(response.data.main.temp));
    setHumidity(Math.round(response.data.main.humidity));
    setWindSpeed(Math.round(response.data.wind.speed));
    setReady(true);
  }

  if (ready) {
    return (
      <div className="row">
        <div className="col-3">
          <img src={""} alt="today's weather" className="todayIcon" />
        </div>
        <div className="col-5">
          <h2>
            <span className="temperature">{temperature}</span>
            <small>°C | °F</small>
          </h2>
        </div>
        <div className="col-4">
          <ul>
            <li>
              <strong>Humidity: </strong>
              {humidity}%
            </li>
            <li>
              <strong>Wind: </strong>
              {windSpeed}km/h
              <br />
              <a
                href="https://en.wikipedia.org/wiki/Beaufort_scale"
                className="beaufort-scale-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Beaufort Scale
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  } else {
    const apiKey = "bbf0836e2ed0d460df9b8ac5448ab908";
    let city = "London";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
