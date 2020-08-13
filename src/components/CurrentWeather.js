import React, { useState, useContext, useEffect } from "react";
import { ApiKey } from "../context/ApiKey";
import axios from "axios";

const CurrentWeather = () => {
  const apiKey = useContext(ApiKey);
  const [location, setLocation] = useState("Fót");
  const [temp, setTemp] = useState(null);
  const [weather, setWeather] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`).then((res) => {
      setWeather(res.data.weather.id);
      setTemp(res.data.main.temp);
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
      </div>
    );
  } else content = "Loading...";

  return content;
};

export default CurrentWeather;
