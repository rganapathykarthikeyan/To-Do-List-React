import React from "react";

const DataContext = React.createContext({
    theme: "",
    search: "",
    toggletheme: (curtheme) => {},
    searchText: (searchText) => {},
})

export default DataContext;