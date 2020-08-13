import React, { useState, useContext, useEffect } from "react";
import { ApiKey } from "../context/ApiKeyContext";
import axios from "axios";
import { LocationNameContext } from "../context/LocationNameContext";

const CurrentWeather = () => {
  const apiKey = useContext(ApiKey);
  const location = useContext(LocationNameContext)[0];
  const [temp, setTemp] = useState(null);
  const [weather, setWeather] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [icon, setIcon] = useState("");

  useEffect(() => {
    setLoading(true);
    if (location !== "") {
      axios
        .get(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`)
        .then((res) => {
          setWeather(res.data.weather[0].main);
          setTemp(res.data.main.temp);
          setIcon(`http://openweathermap.org/img/wn/${res.data.weather[0].icon}@2x.png`);
          setLoading(false);
        })
        .catch((error) => console.log(error));
    }
  }, [apiKey, location]);

  let content;

  if (!isLoading) {
    content = (
      <div className="currentWeather">
        <h1>{location}</h1>
        <h1>{temp}</h1>
        <h1>{weather}</h1>
        <img src={icon} alt="icon"></img>
      </div>
    );
  } else content = <h1>Loading...</h1>;

  return content;
};

export default CurrentWeather;
