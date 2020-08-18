import React from "react";
import WeatherForecastCard from "./WeatherForecastCard";

const WeatherForecast = () => {
  const daysNumberList = [0, 1, 2, 3, 4];

  return (
    <div className="col-sm-6">
      {daysNumberList.map((dayNum) => (
        <WeatherForecastCard key={dayNum} dayNum={dayNum} />
      ))}
    </div>
  );
};

export default WeatherForecast;
