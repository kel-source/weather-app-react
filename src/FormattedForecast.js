import React from "react";
import "./FormattedForecast.css";

export default function FormattedForecast(props) {
  function showTime() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    if (hours < 10) {
      return "0" + hours + ":00";
    } else {
      return hours + ":00";
    }
  }
  function showIcon() {
    let icon = `http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`;
    return icon;
  }
  function showTemperature() {
    let temperature = Math.round(props.data.main.temp);
    return temperature;
  }
  return (
    <div className="FormattedForecast col 2">
      <div className="row">
        <div className="col">{showTime()}</div>
      </div>
      <div className="row">
        <div className="col">
          <img src={showIcon()} alt="" />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <strong>{showTemperature()}°</strong>
        </div>
      </div>
    </div>
  );
}
