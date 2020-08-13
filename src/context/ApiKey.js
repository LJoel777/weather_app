import React, { useState, createContext } from "react";

export const ApiKey = createContext();

export const ApiKeyProvider = (props) => {
  const apiKey = "be6138502fe0d54ef1495809464e8502";
  return <ApiKey.Provider value={apiKey}>{props.children}</ApiKey.Provider>;
};
