import React, { useContext } from "react";
import NavBar from "./NavBar";
import CurrentWeather from "./CurrentWeather";
import WeatherForecast from "./WeatherForecastList";
import { WeatherTypeContext } from "../context/WeatherTypeContext";
import { WeatherContext } from "../context/WeatherContext";
import MainDiv from "../styles/MainStyle";

const Main = () => {
  const weather = useContext(WeatherTypeContext)[0];
  let temp = useContext(WeatherContext)[0];
  if (temp !== "") {
    temp = temp.main.temp;
  }
  return (
    <MainDiv weather={weather} temp={temp}>
      <div className="container">
        <NavBar />
        <div className="row">
          <CurrentWeather />
          <WeatherForecast />
        </div>
      </div>
    </MainDiv>
  );
};

export default Main;
