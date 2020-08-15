import React, { useState, createContext } from "react";

export const WeatherContext = createContext();

export const WeatherProvider = (props) => {
  const [temp, setTemp] = useState(null);
  const [weather, setWeather] = useState(null);
  const [icon, setIcon] = useState("");
  return (
    <WeatherContext.Provider
      value={{
        temp: [temp, setTemp],
        weather: [weather, setWeather],
        icon: [icon, setIcon],
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};
