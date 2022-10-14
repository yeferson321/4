import React, { createContext, useState } from "react";
import { AuthService } from '../components/services/Auth';

export const DataContext = createContext();

const DataProvider = ({children}) => {

  const { checkToken } = AuthService();
  const [isLoggedIn] = useState(checkToken);

  const [code, setCode] = useState();
  const addCode = (code) => { setCode(code) }

  return (

    <DataContext.Provider value={{ code, addCode, isLoggedIn }}>
      {children}
    </DataContext.Provider>

  );
}
export default DataProvider