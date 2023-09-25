import {  createContext } from "react";

export const ContextApp = createContext()

export const ContextProvider = ({children})=>{
    
   
    return(
<ContextApp.Provider >
    
{children}

</ContextApp.Provider>)

}