import React, { useContext } from "react";
import "./Header.css";
import { ImSearch } from "react-icons/im";
import DataContext from "../store/dataContext";

const Header = () => {
  const DataCxt = useContext(DataContext);
  const curtheme = DataCxt.theme;
  const themename = (curtheme === "LIGHT") ? "" : "dark"
  return (
    <div id="component" className={themename}>
      <form id="searchContainer">
        <input id="search" placeholder="Search..." className={themename}/>
        <button id="searchbtn" className={themename}>
          <ImSearch size={19} />
        </button>
      </form>
      <div id="mid"></div>
      <div id="profile">
        <h3 className={`userName ${themename}`}>GK</h3>
        <img
          src="https://wallpapercave.com/wp/fWJXIRQ.png"
          id="photo"
          alt="ProfilePic"
        ></img>
        <button className={`themebtn ${themename}`}  onClick={DataCxt.toggletheme}> Switch to {curtheme === "LIGHT" ? "Dark" : "Light"} Mode</button>
      </div>
    </div>
  );
};

export default Header;
