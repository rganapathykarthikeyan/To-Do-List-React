import React, { useContext, useState } from "react";
import "./Header.css";
import { ImSearch } from "react-icons/im";
import DataContext from "../store/dataContext";
import { Link } from "react-router-dom";

const Header = () => {
  const DataCxt = useContext(DataContext);
  const curtheme = DataCxt.theme;
  const themename = (curtheme === "LIGHT") ? "" : "dark"
  const [searchText, setSearchText] = useState('')

  const submitHandler = (e) => {
    e.preventDefault();
    DataCxt.searchText(searchText);
  }

  return (
    <div id="component" className={themename}>
      <form id="searchContainer" onSubmit={submitHandler}>
        <input id="search" placeholder="Search..." className={themename} onChange={(e) => {setSearchText(e.target.value)}}/>
        <button id="searchbtn" className={themename} >
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
      <Link to="/new" className={`newLink ${themename}`}>New Design</Link>
    </div>
  );
};

export default Header;
