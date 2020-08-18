import React, { useState, createContext } from "react";

export const WeatherTypeContext = createContext();

export const WeatherTypeProvider = (props) => {
  const [weather, setWeather] = useState(null);
  
  return <WeatherTypeContext.Provider value={[weather, setWeather]}>{props.children}</WeatherTypeContext.Provider>;
};
