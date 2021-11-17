import React, { createContext, useState, useEffect } from "react";

export const SupremacyContext = createContext();

const SupremacyContextProvider = (props) => {

  const [currentSection, setCurrentSection] = useState("Inicio");

  return (
    <SupremacyContext.Provider
      value={{
        currentSection,
        setCurrentSection,
      }}
    >
      {props.children}
    </SupremacyContext.Provider>
  );
};

export default SupremacyContextProvider;
