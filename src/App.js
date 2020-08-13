import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Details from "./components/Details";
import CurrentWeather from "./components/CurrentWeather";
import WeatherForest from "./components/WeatherForecast";

function App() {
  return (
    <div className="App">
      <NavBar />
      <CurrentWeather />
      <WeatherForest />
      <Details />
    </div>
  );
}

export default App;
