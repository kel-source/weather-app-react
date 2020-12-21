import React, { useState } from "react";
import axios from "axios";
import TodayData from "./TodayData";
import Forecast from "./Forecast";

export default function WeatherApp() {
  const [ready, setReady] = useState(false);
  const [data, setData] = useState({});
  const [city, setCity] = useState("London");

  function handleResponse(response) {
    setData({
      city: response.data.name,
      country: response.data.sys.country,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      temperature: Math.round(response.data.main.temp),
      humidity: Math.round(response.data.main.humidity),
      windSpeed: Math.round(response.data.wind.speed),
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
    setReady(true);
  }

  function search() {
    const apiKey = "bbf0836e2ed0d460df9b8ac5448ab908";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleInputChange(event) {
    setCity(event.target.value);
  }

  if (ready) {
    return (
      <div className="WeatherApp">
        <div className="city-search">
          <form onSubmit={handleSubmit}>
            <input
              className="city"
              type="search"
              placeholder="Enter a city..."
              autoComplete="off"
              autoFocus
              onChange={handleInputChange}
            />
            <input type="submit" className="btn btn-secondary" />
            <button type="button" className="btn btn-light" id="current-button">
              Current
            </button>
          </form>
        </div>
        <br />
        <TodayData data={data} />
        <Forecast />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
