import React from "react";
import './NotDoneItem.css'
import { BsCheck2 } from 'react-icons/bs';

const NotDoneItem = (props) => {
    return(
        <form id="ItemContainer">
            <button id="Ticks"><BsCheck2 size={35}/></button>
            <div id="title">
            <h2>{props.item.title}</h2>
            </div>
        </form>
    )
}

export default NotDoneItem;