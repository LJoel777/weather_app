import React from "react";
import "./App.css";
import Main from "./components/Main";
import { ApiKeyProvider } from "./context/ApiKeyContext";
import { LocationNameProvider } from "./context/LocationNameContext";
import { WeatherProvider } from "./context/WeatherContext";

function App() {
  return (
    <WeatherProvider>
      <ApiKeyProvider>
        <LocationNameProvider>
          <Main />
        </LocationNameProvider>
      </ApiKeyProvider>
    </WeatherProvider>
  );
}
export default App;
