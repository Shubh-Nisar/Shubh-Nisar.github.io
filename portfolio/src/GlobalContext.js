import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
    const [time, setTime] = useState();
    
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