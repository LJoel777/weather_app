import React from "react";
import { WeatherContext } from "../context/WeatherContext";
import { useContext } from "react";
import { LocationNameContext } from "../context/LocationNameContext";

const Details = () => {
  const weather = useContext(WeatherContext)[0];
  const location = useContext(LocationNameContext)[0];
  return (
    <div className="card">
      <div className="card-header">
        <h2 className="location">{location}</h2>
      </div>
      <div className="card-body">
        <div className="card-text" id="details">
          <p>Country: {weather.sys.country}</p>
          <p>
            Sun rises at: {new Date(weather.sys.sunrise * 1000).getHours()}:{new Date(weather.sys.sunrise * 1000).getMinutes()}
          </p>
          <p className="detail">
            Sun sets at: {new Date(weather.sys.sunset * 1000).getHours()}:{new Date(weather.sys.sunset * 1000).getMinutes()}
          </p>
          <p className="detail">Timezone: UTC + {weather.timezone / 3600}</p>
          <p className="detail">
            Temperature ranges in area from {weather.main.temp_min} &#8451; to {weather.main.temp_max} &#8451;
          </p>
          <p className="detail">
            Pressure: {weather.main.pressure} hPa or {Math.round(weather.main.pressure / 1000)} bar
          </p>
          <p className="detail">Humidity: {weather.main.humidity}%</p>
          <p className="detail">Windspeed: {weather.wind.speed * 3.6} k/m</p>
          <p className="detail">Cloudness: {weather.clouds.all}%</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
