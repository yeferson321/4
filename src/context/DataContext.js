import React, { createContext, useState } from "react";

export const DataContext = createContext();

const DataProvider = ({children}) => {

  const [code, setCode] = useState();
  const addCode = (code) => { setCode(code) }

  return (

    <DataContext.Provider value={{ code, addCode}}>
      {children}
    </DataContext.Provider>

  );
}
export default DataProvider