import React, { useState, useContext, useEffect } from "react";
import { ApiKey } from "../context/ApiKeyContext";
import { LocationNameContext } from "../context/LocationNameContext";
import DailyForecast from "./DailyForecast";
// import Date from "date";
import axios from "axios";

const WeatherForecast = () => {
  const apiKey = useContext(ApiKey);
  const location = useContext(LocationNameContext)[0];
  const [isLoading, setIsLoading] = useState(false);
  const [daysWeather, setDaysWeather] = useState([]);
  const url = `http://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${apiKey}&units=metric`;

  const calculateDailyAveTemp = () => {};

  useEffect(() => {
    setIsLoading(true);
    if (location !== "") {
      axios.get(url).then((res) => {
        const date = new Date(res.data.list[0].dt * 1000);
        // setDaysWeather(res.data.list);
        console.log(date.getHours() + "" + date);
        setIsLoading(false);
      });
    }
  }, [location, url]);

  let content;

  if (!isLoading) {
    content = (
      <div className="weatherForecast">
        {daysWeather.map((data) => {
          // return <DailyForecast data={data} />;
        })}
      </div>
    );
  } else content = "";

  return content;
};

export default WeatherForecast;
