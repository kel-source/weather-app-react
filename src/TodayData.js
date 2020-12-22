import React from "react";
import "./TodayData.css";
import FormattedDate from "./FormattedDate";
import UnitChange from "./UnitChange";
import FormattedBeaufortScale from "./FormattedBeaufortScale";

export default function TodayData(props) {
  return (
    <div className="TodayData">
      <h1>
        {props.data.city} ({props.data.country})
      </h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="weather-description">{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-3">
          <img
            src={props.data.icon}
            alt="today's weather"
            className="todayIcon"
          />
        </div>
        <div className="col-5">
          <h2>
            <UnitChange celsius={props.data.temperature} />
          </h2>
        </div>
        <div className="col-4">
          <ul>
            <li>
              <strong>Humidity: </strong>
              {props.data.humidity}%
            </li>
            <li>
              <strong>Wind: </strong>
              {props.data.windSpeed}km/h
              <br />
              <a
                href="https://en.wikipedia.org/wiki/Beaufort_scale"
                className="beaufort-scale-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FormattedBeaufortScale windSpeed={props.data.windSpeed} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
