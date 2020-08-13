import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Details from "./components/Details";
import CurrentWeather from "./components/CurrentWeather";
import WeatherForest from "./components/WeatherForecast";
import { ApiKeyProvider } from "./context/ApiKey";

function App() {
  return (
    <div className="App">
      <div className="container">
        <NavBar />
        <ApiKeyProvider>
          <CurrentWeather />
          <WeatherForest />
          <Details />
        </ApiKeyProvider>
      </div>
    </div>
  );
}

export default App;
