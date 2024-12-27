import { createContext, useContext, useState } from "react";
export const CaptainDataContext = createContext();

const CaptainContext = ({ children }) => {
  const [isloading, setIsloading] = useState(false);
  const [error, seterror] = useState(null);
  const [captain, setCaptain] = useState(null);
  const updateCaptain = (captainData) => {
    setCaptain(captainData);
  };
  const value = {
    captain,
    setCaptain,
    isloading,
    setIsloading,
    error,
    seterror,
    updateCaptain,
  };
  return (
    <CaptainDataContext.Provider value={value}>
      {children}
    </CaptainDataContext.Provider>
  );
};

export default CaptainContext;