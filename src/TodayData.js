import axios from "axios";
import React, { useState } from "react";
import "./TodayData.css";

export default function TodayData() {
  const [ready, setReady] = useState(false);
  const [data, setData] = useState({});

  function handleResponse(response) {
    setData({
      city: "London (GB)",
      description: response.data.weather[0].description,
      temperature: Math.round(response.data.main.temp),
      humidity: Math.round(response.data.main.humidity),
      windSpeed: Math.round(response.data.wind.speed),
    });
    setReady(true);
  }

  if (ready) {
    return (
      <div className="TodayData">
        <h1>{data.city}</h1>
        <ul>
          <li>Thursday 17 December | 20:15</li>
          <li className="weather-description">{data.description}</li>
        </ul>
        <div className="row">
          <div className="col-3">
            <img src={""} alt="today's weather" className="todayIcon" />
          </div>
          <div className="col-5">
            <h2>
              <span className="temperature">{data.temperature}</span>
              <small>°C | °F</small>
            </h2>
          </div>
          <div className="col-4">
            <ul>
              <li>
                <strong>Humidity: </strong>
                {data.humidity}%
              </li>
              <li>
                <strong>Wind: </strong>
                {data.windSpeed}km/h
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
