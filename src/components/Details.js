import React from "react";

const Details = (props) => {
  /* country, sunrise, sunset, timezone, min-max temp (in area), pressure: hPa(hectopascal, 1hPa=0,001 bar), humidity: %, windspeed: m/s, clouds: % */
  return (
    <div>
      <div className="card-header">
        <h2 className="location">{props.location}</h2>
      </div>
      <div className="card-body">
        <div className="card-text">
          <p>Country: {props.weather.sys.country}</p>
          <p>
            Sun rises at:{" "}
            {new Date(props.weather.sys.sunrise * 1000).getHours()}:
            {new Date(props.weather.sys.sunrise * 1000).getMinutes()}
          </p>
          <p>
            Sun sets at: {new Date(props.weather.sys.sunset * 1000).getHours()}:
            {new Date(props.weather.sys.sunset * 1000).getMinutes()}
          </p>
          <p>Timezone: UTC + {props.weather.timezone / 3600}</p>
          <p>
            Temperature ranges in area from {props.weather.main.temp_min}{" "}
            &#8451; to {props.weather.main.temp_max} &#8451;
          </p>
          <p>
            Pressure: {props.weather.main.pressure} hPa or{" "}
            {Math.round(props.weather.main.pressure / 1000)} bar
          </p>
          <p>Humidity: {props.weather.main.humidity}%</p>
          <p>Windspeed: {props.weather.wind.speed * 3.6} k/m</p>
          <p>Cloudness: {props.weather.clouds.all}%</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
