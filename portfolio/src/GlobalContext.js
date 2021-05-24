import React, { createContext, useState, useEffect } from "react";
import { lightTheme, darkTheme } from './utils/theme';

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
    const [time, setTime] = useState();

    useEffect(() => {
        console.log(time);
    }, [time]);
    
    return (
        <GlobalContext.Provider
        value={{
            contextTime: [time, setTime],
        }}
        >
        {props.children}
        </GlobalContext.Provider>
    );
};