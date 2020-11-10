import React, { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";
import { LocationNameContext } from "../context/LocationNameContext";

export default function CurrentWeatherMain() {
  const weather = useContext(WeatherContext)[0];
  const location = useContext(LocationNameContext)[0];
  const icon = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;

  return (
    <div>
      <div className="card-header">
        <h2 className="location">{location}</h2>
      </div>
      <div className="card-body">
        <div className="card-text">
          <p className="weather">{weather.weather[0].description}</p>
          <p className="temp">{Math.round(weather.main.temp)} &#8451;</p>
        </div>
        <img className="cardIMG" src={icon} alt="icon" />
      </div>
    </div>
  );
}
