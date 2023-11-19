import { createContext } from "react";
import React from "react";

export const Context = createContext();

const Provider = ({ children }) => {


    const [theme, setTheme] = React.useState("light")

    const data = {
        theme, setTheme

    }

  return (
        <Context.Provider value={data}>
            {children}
        </Context.Provider>
    )
}

export default Provider