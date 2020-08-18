import React, { useContext } from "react";
import NavBar from "./NavBar";
import CurrentWeather from "./CurrentWeather";
import WeatherForecast from "./WeatherForecastList";
import { WeatherTypeContext } from "../context/WeatherTypeContext";
import MainDiv from "../styles/MainStyle";

const Main = () => {
  const weather = useContext(WeatherTypeContext)[0];
  return (
    <MainDiv weather={weather}>
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
