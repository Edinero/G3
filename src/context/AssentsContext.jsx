import React, { createContext, useContext, useState } from 'react';

const AssentsContext = createContext();

export const AssentsProvider = ({ children }) => {
  const [assents, setAssents] = useState([]);

  return (
    <AssentsContext.Provider value={{ assents, setAssents }}>
      {children}
    </AssentsContext.Provider>
  );
};

export const useAssents = () => {
  return useContext(AssentsContext);
};