// import React from "react";
// import axios from "axios";
// import WeatherApp from "./WeatherApp";

// export default function CurrentWeather() {
//   function showPosition(position) {
//     let latitude = position.coords.latitude;
//     let longitude = position.coords.longitude;
//     let apiKey = "bbf0836e2ed0d460df9b8ac5448ab908";
//     let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
//     axios.get(apiUrl).then({ WeatherApp });

//     // apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
//     // axios.get(apiUrl).then(showForecast);
//   }
//   return navigator.geolocation.getCurrentPosition(showPosition);
// }
