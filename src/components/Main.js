import React, { useContext } from "react";
import NavBar from "./NavBar";
import CurrentWeather from "./CurrentWeather";
import WeatherForecast from "./WeatherForecastList";
import { WeatherContext } from "../context/WeatherContext";
import MainDiv from "../styles/MainStyle";

const Main = () => {
  let weather;
  let temp;
  let data = useContext(WeatherContext)[0];
  if (data !== "") {
    temp = data.main.temp;
    weather = data.weather[0].main;
  }
  return (
    <MainDiv weather={weather} temp={temp}>
      <div className="container-fluid">
        <div className="row-fluid">
          <NavBar />
          <CurrentWeather />
        </div>
        <WeatherForecast />
      </div>
    </MainDiv>
  );
};

export default Main;
