import React from "react";
import "./TodayOverview.css";

export default function TodayOverview() {
  let overviewData = {
    location: "London",
    date: "Saturday 21 November",
    time: "15:00",
    description: "Overcast Clouds"
  };
  return (
    <div className="TodayOverview">
      <h1>{overviewData.location}</h1>
      <ul>
        <li>
          {overviewData.date} | {overviewData.time}
        </li>
        <li className="weather-description">{overviewData.description}</li>
      </ul>
    </div>
  );
}
