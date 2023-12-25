import { createContext, useContext } from "react";
import { useState } from "react";


export const LoaderContext = createContext();

export function LoaderContextProvider({ children }) {
  const [loader,setloader] = useState(false);



  return (
    <LoaderContext.Provider value={{ loader,setloader}}>
      {children}
    </LoaderContext.Provider>
  );
}

export function useLoader() {
  return useContext(LoaderContext);
}
