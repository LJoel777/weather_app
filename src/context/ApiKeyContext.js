import React, { createContext } from "react";

export const ApiKey = createContext();

export const ApiKeyProvider = (props) => {
  const apiKey = "2c865c3ac146db6c06ac1eb7d044c0ef";
  return <ApiKey.Provider value={apiKey}>{props.children}</ApiKey.Provider>;
};
