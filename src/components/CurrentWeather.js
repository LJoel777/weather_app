import React, { useState, useContext, useEffect } from "react";
import { ApiKey } from "../context/ApiKey";
import axios from "axios";

const CurrentWeather = () => {
  const apiKey = useContext(ApiKey);
  const [location, setLocation] = useState("Africa");
  const [temp, setTemp] = useState(null);
  const [weather, setWeather] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [icon, setIcon] = useState("");

  useEffect(() => {
    setLoading(true);
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`).then((res) => {
      setWeather(res.data.weather[0].main);
      setTemp(res.data.main.temp);
      setIcon(`http://openweathermap.org/img/wn/${res.data.weather[0].icon}@2x.png`);
      setLoading(false);
    });
  }, [apiKey, location]);

  let content;

  if (!isLoading) {
    console.log(weather);
    content = (
      <div className="currentWeather">
        <h1>{location}</h1>
        <h1>{temp}</h1>
        <h1>{weather}</h1>
        <img src={icon} alt="icon"></img>
      </div>
    );
  } else content = "Loading...";

  return content;
};

export default CurrentWeather;
