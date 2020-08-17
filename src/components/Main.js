import React, { useContext } from "react";
import NavBar from "./NavBar";
import CurrentWeather from "./CurrentWeather";
import WeatherForest from "./WeatherForecast";
import { WeatherTypeContext } from "../context/WeatherTypeContext";
import MainDiv from "../styles/MainStyle";

const Main = () => {
  const weather = useContext(WeatherTypeContext)[0];
  return (
    <MainDiv weather={weather}>
      <div className="container">
        <NavBar />
        <CurrentWeather />
        <WeatherForest />
      </div>
    </MainDiv>
  );
};

export default Main;
