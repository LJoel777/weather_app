import React, { useState, useContext, useEffect } from "react";
import { ApiKey } from "../context/ApiKeyContext";
import axios from "axios";
import { LocationNameContext } from "../context/LocationNameContext";
import { WeatherContext } from "../context/WeatherContext";
import ReactCardFlip from "react-card-flip";
import CurrentWeatherMain from "./CurrentWeatherMain";
import Details from "./Details";

const CurrentWeather = () => {
  const apiKey = useContext(ApiKey);
  const location = useContext(LocationNameContext)[0];
  const [weather, setWeather] = useContext(WeatherContext);
  const [notFound, setNotFound] = useState(false);
  const [isLoading, setLoading] = useState(true);

  const [isFlipped, setIsFlipped] = useState(false);
  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  let content;

  useEffect(() => {
    setLoading(true);
    setIsFlipped(false);
    if (location !== "") {
      axios
        .get(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`)
        .then((res) => {
          setWeather(res.data);
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
      <div className="col-3" align="center">
        <div className="currentWeather">
          <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
            <div className="card" onClick={handleClick}>
              <CurrentWeatherMain />
            </div>
            <div className="card" onClick={handleClick}>
              <Details weather={weather} location={location} />
            </div>
          </ReactCardFlip>
        </div>
      </div>
    );
  } else if (!isLoading & notFound) content = <h1 className="alert">This location does not exist.</h1>;
  else content = <h1 className="alert">Write a location name...</h1>;
  return content;
};

export default CurrentWeather;
