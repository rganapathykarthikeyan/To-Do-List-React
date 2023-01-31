import React from "react";
import { useState } from "react";
import DataContext from "./dataContext";

const DataProvider = (props) => {
    const [curtheme, themeHandler] = useState("LIGHT");
    const [search, searchHandler] = useState("");
    const toggleTheme = () => {
        if(curtheme === "LIGHT"){
            themeHandler("DARK");
        }
        if (curtheme === "DARK"){
            themeHandler("LIGHT");
        }
    }
    const setSearchText = (text) => {
        searchHandler(text);
    }
    const dataContext = {
        theme: curtheme,
        search: search,
        toggletheme: toggleTheme,
        searchText: setSearchText,
    };

    return(
        <DataContext.Provider value={dataContext}>
            {props.children}
        </DataContext.Provider>
    )
}

export default DataProvider;

