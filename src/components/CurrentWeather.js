import React, { useState, useContext, useEffect } from "react";
import { ApiKey } from "../context/ApiKeyContext";
import axios from "axios";
import { LocationNameContext } from "../context/LocationNameContext";
import { WeatherContext } from "../context/WeatherContext";

const CurrentWeather = () => {
  const apiKey = useContext(ApiKey);
  const location = useContext(LocationNameContext)[0];
  const [temp, setTemp] = useState(null);
  const [icon, setIcon] = useState("");
  const [weatherDescription, setWeatherDescription] = useState("");
  const setWeather = useContext(WeatherContext)[1];
  const [notFound, setNotFound] = useState(false);
  const [isLoading, setLoading] = useState(false);

  let content;

  useEffect(() => {
    setLoading(true);
    if (location !== "") {
      axios
        .get(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`)
        .then((res) => {
          setWeather(res.data.weather[0].main);
          setWeatherDescription(res.data.weather[0].description);
          setTemp(res.data.main.temp);
          setIcon(`http://openweathermap.org/img/wn/${res.data.weather[0].icon}@2x.png`);
          setNotFound(false);
          setLoading(false);
        })
        .catch((error) => {
          setNotFound(true);
          setLoading(false);
        });
    }
  }, [apiKey, location, setWeather]);

  if (!isLoading & !notFound) {
    content = (
      <div className="currentWeather">
        <div className="row">
          <div className="nothing"></div>
          <div className="card">
            <div className="card-header">
              <h2 className="location">{location}</h2>
            </div>
            <div className="card-body">
              <div className="card-text">
                <p className="weather">{weatherDescription}</p>
                <p className="temp">{Math.round(temp)} &#8451;</p>
              </div>
              <img className="cardIMG" src={icon} alt="icon" />
            </div>
          </div>
        </div>
      </div>
    );
  } else if (!isLoading & notFound) content = <h1 className="alert">This location is not exist...</h1>;
  else content = <h1 className="alert">Write a location name...</h1>;
  return content;
};

export default CurrentWeather;
