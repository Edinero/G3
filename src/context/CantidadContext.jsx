import React, { createContext, useContext, useState } from "react";

// Crea el contexto de la cantidad
const CantidadContext = createContext();

// Hook personalizado para acceder al contexto de la cantidad

// Proveedor del contexto de la cantidad
export const CantidadProvider = ({ children }) => {
  const [cantidad, setCantidad] = useState(1);

  // Función para actualizar la cantidad
  const updateCantidad = (newCantidad) => {
    setCantidad(newCantidad);
  };

  return (
    <CantidadContext.Provider value={{ cantidad, updateCantidad }}>
      {children}
    </CantidadContext.Provider>
  );
};
export const useCantidad = () => {
    return useContext(CantidadContext);
  };
  