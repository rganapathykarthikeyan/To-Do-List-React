import React from "react";
import { useState } from "react";
import DataContext from "./dataContext";

const DataProvider = (props) => {
    const [curtheme, themeHandler] = useState("LIGHT");
    const toggleTheme = () => {
        if(curtheme === "LIGHT"){
            themeHandler("DARK");
        }
        if (curtheme === "DARK"){
            themeHandler("LIGHT");
        }
    }
    const dataContext = {
        theme: curtheme,
        toggletheme: toggleTheme,
    };

    return(
        <DataContext.Provider value={dataContext}>
            {props.children}
        </DataContext.Provider>
    )
}

export default DataProvider;

