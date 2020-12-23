import React, { useState } from "react";
import axios from "axios";
import "./Forecast.css";
import FormattedForecast from "./FormattedForecast";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState("");

  function handleForecastResponse(response) {
    setForecast(response.data);
    setLoaded(true);
  }
  if (loaded && props.city === forecast.city.name) {
    return (
      <div className="row">
        {forecast.list.slice(0, 6).map(function (forecastLoop) {
          return <FormattedForecast data={forecastLoop} />;
        })}
      </div>
    );
  } else {
    const apiKey = "bbf0836e2ed0d460df9b8ac5448ab908";
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleForecastResponse);
    return null;
  }
}
