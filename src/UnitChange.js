import React, { useState } from "react";
import "./UnitChange.css";

export default function UnitChange(props) {
  const [unit, setUnit] = useState("celsius");

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <div className="UnitChange">
        <span className="temperature">
          {props.celsius}
          <small>
            °C <font color="lightgray">|</font>{" "}
            <a href="/" onClick={convertToFahrenheit}>
              °F
            </a>
          </small>
        </span>
      </div>
    );
  } else {
    let fahrenheit = Math.round((props.celsius * 9) / 5 + 32);
    return (
      <div className="UnitChange">
        <span className="temperature">
          {fahrenheit}
          <small>
            <a href="/" onClick={convertToCelsius}>
              °C{" "}
            </a>
            <font color="lightgray">|</font> °F
          </small>
        </span>
      </div>
    );
  }
}
