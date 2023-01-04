import React from "react";
import './NotDoneItem.css'
import { BsCheck2 } from 'react-icons/bs';
import {BiTime} from 'react-icons/bi';
import {RxCross1} from 'react-icons/rx';

const NotDoneItem = (props) => {

    const ChangeDoneState = () => {
        props.OnDone(props.id)
    }

    const DelItem = () => {
        props.onDel(props.id);
    }

    return(
        <form id="ItemContainer">
            <button id="Ticks" type="button" onClick={ChangeDoneState}><BsCheck2 size={35}/></button>
            <div id="titles">
            <h2>{props.title}</h2>
            </div>
            <div id="endl">
                <h4><BiTime size={20} style={{color:'lime'}}/>  {props.deadline} </h4>
                <button id="delete" type="submit" onClick={DelItem}><RxCross1 size={20}/></button>
            </div>
        </form>
    )
}

export default NotDoneItem;