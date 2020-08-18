import React, { useContext } from "react";
import WeatherForecastCard from "./WeatherForecastCard";
import { LocationNameContext } from "../context/LocationNameContext";

const WeatherForecast = () => {
  const location = useContext(LocationNameContext)[0];
  const daysNumberList = [0, 1, 2, 3, 4];

  let content;
  if (location !== "") {
    content = (
      <div className="row-fluid justify-content-center">
        <div className="forecast">
          {daysNumberList.map((dayNum) => (
            <WeatherForecastCard key={dayNum} dayNum={dayNum} />
          ))}
        </div>
      </div>
    );
  } else content = "";

  return content;
};

export default WeatherForecast;
