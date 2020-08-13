import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Details from "./components/Details";
import CurrentWeather from "./components/CurrentWeather";
import WeatherForest from "./components/WeatherForecast";
import { ApiKeyProvider } from "./context/ApiKeyContext";
import { LocationNameProvider } from "./context/LocationNameContext";

function App() {
  return (
    <div className="App">
      <div className="container">
        <ApiKeyProvider>
          <LocationNameProvider>
            <NavBar />
            <CurrentWeather />
            <WeatherForest />
            <Details />
          </LocationNameProvider>
        </ApiKeyProvider>
      </div>
    </div>
  );
}

export default App;
