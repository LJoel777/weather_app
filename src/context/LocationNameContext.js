import React, { useState, createContext } from "react";

export const LocationNameContext = createContext();

export const LocationNameProvider = (props) => {
  const [location, setLocation] = useState("");
  return <LocationNameContext.Provider value={[location, setLocation]}>{props.children}</LocationNameContext.Provider>;
};
