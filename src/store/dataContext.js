import React from "react";

const DataContext = React.createContext({
    theme: "",
    toggletheme: (curtheme) => {}
})

export default DataContext;