import React from "react";
import WeatherForecastCard from "./WeatherForecastCard";

const WeatherForecast = () => {
  const daysNumberList = [0, 1, 2, 3, 4];

  return (
    <div>
      {daysNumberList.map((dayNum) => (
        <WeatherForecastCard key={dayNum} dayNum={dayNum} />
      ))}
    </div>
  );
};

export default WeatherForecast;
