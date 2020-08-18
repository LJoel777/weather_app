import React from "react";

const Details = (props) => {
  return (
    <div className="card">
      <div className="card-header">
        <h2 className="location">{props.location}</h2>
      </div>
      <div className="card-body">
        <div className="card-text" id="details">
          <p>Country: {props.weather.sys.country}</p>
          <p>
            Sun rises at: {new Date(props.weather.sys.sunrise * 1000).getHours()}:{new Date(props.weather.sys.sunrise * 1000).getMinutes()}
          </p>
          <p className="detail">
            Sun sets at: {new Date(props.weather.sys.sunset * 1000).getHours()}:{new Date(props.weather.sys.sunset * 1000).getMinutes()}
          </p>
          <p className="detail">Timezone: UTC + {props.weather.timezone / 3600}</p>
          <p className="detail">
            Temperature ranges in area from {props.weather.main.temp_min} &#8451; to {props.weather.main.temp_max} &#8451;
          </p>
          <p className="detail">
            Pressure: {props.weather.main.pressure} hPa or {Math.round(props.weather.main.pressure / 1000)} bar
          </p>
          <p className="detail">Humidity: {props.weather.main.humidity}%</p>
          <p className="detail">Windspeed: {props.weather.wind.speed * 3.6} k/m</p>
          <p className="detail">Cloudness: {props.weather.clouds.all}%</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
