import React, { useContext } from "react";
import NavBar from "./NavBar";
import Details from "./Details";
import CurrentWeather from "./CurrentWeather";
import WeatherForecast from "./WeatherForecast";
import { WeatherTypeContext } from "../context/WeatherTypeContext";
import MainDiv from "../styles/MainStyle";

const Main = () => {
  const weather = useContext(WeatherTypeContext)[0];
  return (
    <MainDiv weather={weather}>
      <div className="container">
        <NavBar />
        <div className="row">
        <CurrentWeather />
        <WeatherForecast />
        <Details />
        </div>
      </div>
    </MainDiv>
  );
};

export default Main;
