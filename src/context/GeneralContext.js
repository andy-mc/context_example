import React, {useReducer} from "react";
import {generalReducer} from "../reducers/generalReducer";

const GeneralContext = React.createContext();

const initialState = {
  coolFaces: 2
}

const GeneralProvider = ({ children }) => {
  const [state, dispatch] = useReducer(generalReducer, initialState);
  const value = { state, dispatch };
  
  return (
    <GeneralContext.Provider value={value}>
      {children}
    </GeneralContext.Provider>
  )
} 

export { GeneralContext, GeneralProvider };
