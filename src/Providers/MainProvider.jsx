import React, { createContext } from "react";

export const MainContext = createContext(MainProvider);
function MainProvider({ children }) {
  const allValue = { name: "badhon", age: 25 };
  return (
  <MainContext.Provider value={allValue}>
    {children}
</MainContext.Provider>);
}

export default MainProvider;
