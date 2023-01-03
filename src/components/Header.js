import React from "react";
import "./Header.css"
import { ImSearch } from 'react-icons/im';

const Header = () => {
    return (
        <div id="component">
            <form id="searchContainer">
            <input id="search" placeholder="Search..."/>
            <button id="searchbtn"><ImSearch size={19}/></button>
            </form>
            <div id="mid"></div>
            <div id="profile">
            <h3>Marko Velickovica</h3>
            <img src='https://wallpapercave.com/wp/fWJXIRQ.png' id="photo"></img></div>
        </div>
    )
}

export default Header;