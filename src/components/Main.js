import React, { useContext } from "react";
import NavBar from "./NavBar";
import Details from "./Details";
import CurrentWeather from "./CurrentWeather";
import WeatherForest from "./WeatherForecast";
import { WeatherContext } from "../context/WeatherContext";
import MainDiv from "../styles/MainStyle";

const Main = () => {
  const weather = useContext(WeatherContext).weather[1];
  return (
    <MainDiv weather={weather}>
      <div className="container">
        <NavBar />
        <CurrentWeather />
        <WeatherForest />
        <Details />
      </div>
    </MainDiv>
  );
};

export default Main;
