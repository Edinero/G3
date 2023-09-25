import { createContext, useContext, useState } from 'react';

const SalaContext = createContext();

export const SalaProvider = ({ children }) => {
  const [selectedSala, setSelectedSala] = useState('');

  return (
    <SalaContext.Provider value={{ selectedSala, setSelectedSala }}>
      {children}
    </SalaContext.Provider>
  );
};

export const useSala = () => {
  return useContext(SalaContext);
};