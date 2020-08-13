import React, { useState, useContext, useEffect } from "react";
import { ApiKey } from "../context/ApiKeyContext";
import axios from "axios";
import { LocationNameContext } from "../context/LocationNameContext";
import { WeatherDegreeContext } from "../context/WeatherDegreeContext";


const CurrentWeather = () => {
  const apiKey = useContext(ApiKey);
  const location = useContext(LocationNameContext)[0];
  const setWeatherContext = useContext(WeatherDegreeContext)[1];
  const [notFound, setNotFound] = useState(false);
  const [temp, setTemp] = useState(null);
  const [weather, setWeather] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [icon, setIcon] = useState("");


  let content;

  useEffect(() => {
    if (location !== "") {
      axios
        .get(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`)
        .then((res) => {
          setWeatherContext(res.data.weather[0].main);
          setWeather(res.data.weather[0].main);
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
  }, [setWeatherContext,apiKey, location]);

  if (!isLoading & !notFound) {
    content = (
      <div className="currentWeather">
        <div className="row">
          <div className="nothing">

          </div>
        <div className="card">
            <div className="card-header">
              <h2 className="location">{location}</h2>
            </div>
            <img className="cardIMG" src={icon} />
            <div className="card-body">
                <div className="card-text">
                    <p className="temp" >{temp} &#8451;</p>
                    <p className="weather" >{weather}</p>
                </div>
            </div>
          </div>
        </div>
        </div>
       
    );
  } else if (!isLoading & notFound) content = <h1>This location is not exist...</h1>;
  else content = <h1>Loading...</h1>;
  return content;
};

export default CurrentWeather;
