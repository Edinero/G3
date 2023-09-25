import React, { createContext, useContext, useState, useEffect } from "react";

const SelectedInfoContext = createContext();

export const SelectedInfoProvider = ({ children }) => {
  // Intenta obtener selectedInfo desde localStorage, si no existe, usa un valor por defecto
  const initialSelectedInfo = JSON.parse(localStorage.getItem("selectedInfo")) || {
    options: {
      options: "Opción seleccionada",
      hour: "Hora seleccionada",
    },
    cantidad: 2,
    assents: [],
    selectedSala: "Cinema Plaza Norte",
  };
  console.log("Initial Cantidad:", initialSelectedInfo.cantidad);
  const [selectedInfo, setSelectedInfo] = useState(initialSelectedInfo);

  // Guarda selectedInfo en localStorage cada vez que cambie
  useEffect(() => {
    localStorage.setItem("selectedInfo", JSON.stringify(selectedInfo));
  }, [selectedInfo]);

  return (
    <SelectedInfoContext.Provider value={{ selectedInfo, setSelectedInfo }}>
      {children}
    </SelectedInfoContext.Provider>
  );
};

export const useSelectedInfo = () => {
  return useContext(SelectedInfoContext);
};
