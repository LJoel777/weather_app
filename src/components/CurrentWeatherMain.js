import React from "react";

export default function CurrentWeatherMain(props) {
  const icon = `http://openweathermap.org/img/wn/${props.weather.weather[0].icon}@2x.png`;

  return (
    <div>
      <div className="card-header">
        <h2 className="location">{props.location}</h2>
      </div>
      <div className="card-body">
        <div className="card-text">
          <p className="weather">{props.weather.weather[0].description}</p>
          <p className="temp">{Math.round(props.weather.main.temp)} &#8451;</p>
        </div>
        <img className="cardIMG" src={icon} alt="icon" />
      </div>
    </div>
  );
}
