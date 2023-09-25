import React, { createContext, useContext, useState } from "react";

const OptionsContext = createContext();

export const OptionsProvider = ({ children }) => {
  const [options, setOptions] = useState({
    optionss: "",
    hour: "",
  });
  return (
    <OptionsContext.Provider
      value={{ options, setOptions,}}
    >
      {children}
    </OptionsContext.Provider>
  );
};

export const useOptions = () => {
  return useContext(OptionsContext);
};
