import React from "react";
import "./TodayData.css";

export default function TodayData() {
  let todayData = {
    temperature: "19",
    humidity: "75",
    wind: "5",
    imgUrl:
      "https://cdn.iconscout.com/icon/free/png-512/cloudy-cloud-snow-weather-38920.png"
  };
  return (
    <div className="TodayData">
      <div className="row">
        <div className="col-3">
          <img
            src={todayData.imgUrl}
            alt="today's weather"
            className="todayIcon"
          />
        </div>
        <div className="col-5">
          <h2>
            <span className="temperature">{todayData.temperature}</span>
            <small>°C | °F</small>
          </h2>
        </div>
        <div className="col-4">
          <ul>
            <li>
              <strong>Humidity: </strong>
              {todayData.humidity}%
            </li>
            <li>
              <strong>Wind: </strong>
              {todayData.wind}km/h
              <br />
              <a
                href="https://en.wikipedia.org/wiki/Beaufort_scale"
                target="_blank"
                className="beaufort-scale-link"
              >
                Beaufort Scale
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}