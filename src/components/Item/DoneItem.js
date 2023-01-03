import React from "react";
import { BsCheck2 } from 'react-icons/bs';
import './DoneItem.css'


const DoneItem = (props) => {
    console.log(props);
    return(
        <form id="ItemContainer">
            <button id="doneTick"><BsCheck2 size={35}/></button>
            <div id="title">
            <h2>{props.item.title}</h2>
            </div>
        </form>
    )
}

export default DoneItem;