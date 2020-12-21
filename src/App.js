import React from "react";
import "./App.css";
import WeatherApp from "./WeatherApp";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="wrapper">
          <div className="weather-project">
            <WeatherApp />
          </div>
          <p class="open-source">
            <a
              href="https://github.com/kel-source/weather-app-react"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open-source code
            </a>{" "}
            by Kathryn E. Lloyd
          </p>
        </div>
      </div>
    </div>
  );
}
