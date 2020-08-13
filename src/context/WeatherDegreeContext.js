import React, { useState, createContext } from "react";

export const WeatherDegreeContext = createContext();

export const WeatherDegreeProvider = (props) => {
  const [weather, setTempeture] = useState("Clouds");
  return <WeatherDegreeContext.Provider value={[weather, setTempeture]}>{props.children}</WeatherDegreeContext.Provider>;
};
