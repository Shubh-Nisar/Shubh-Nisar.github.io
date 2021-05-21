import React, { createContext, useState, useEffect } from "react";
import { lightTheme, darkTheme } from './utils/theme';

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
    
    
    return (
        <GlobalContext.Provider
        value={{
            
        }}
        >
        {props.children}
        </GlobalContext.Provider>
    );
};