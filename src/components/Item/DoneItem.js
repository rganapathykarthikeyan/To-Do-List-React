import React from "react";
import { BsCheck2, BsTrash } from 'react-icons/bs';
import './DoneItem.css'



const DoneItem = (props) => {

    const ChangeDoneState = () => {
        props.OnDone(props.id);
    }

    const DelItem = () => {
        props.onDel(props.id);
    }

    return(
        <form id="ItemContainer">
            <button id="doneTick" type="button" onClick={ChangeDoneState}><BsCheck2 size={35}/></button>
            <div id="title">
            <h2>{props.title}</h2>
            </div>
            <div id="end">
                <button id="del" type="submit" onClick={DelItem}><BsTrash size={20}/></button>
            </div>
        </form>
    )
}

export default DoneItem;