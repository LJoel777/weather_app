import React from "react";
import WeatherForecastCard from "./WeatherForecastCard";

const WeatherForecast = () => {
  const daysNumberList = [0, 1, 2, 3, 4];

  return (
    <div className="row-fluid justify-content-center">
    <div className="forecast" >
      {/* <div className="row-fluid"> */}
        
      {daysNumberList.map((dayNum) => (
        <WeatherForecastCard key={dayNum} dayNum={dayNum} />
      ))}
         </div>
         </div>
  );
};

export default WeatherForecast;
