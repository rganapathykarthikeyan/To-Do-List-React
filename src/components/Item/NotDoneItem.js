import React, {useContext} from "react";
import './NotDoneItem.css'
import { BsCheck2 } from 'react-icons/bs';
import {BiTime} from 'react-icons/bi';
import {RxCross1} from 'react-icons/rx';
import DataContext from "../../store/dataContext";

const NotDoneItem = (props) => {
    const DataCxt = useContext(DataContext);
    const curtheme = DataCxt.theme;
    const themename = (curtheme === "LIGHT") ? "" : "dark"
    const ChangeDoneState = () => {
        props.OnDone(props.id)
    }

    const DelItem = () => {
        props.onDel(props.id);
    }

    return(
        <form id="ItemContainer">
            <button id="Ticks" type="button" onClick={ChangeDoneState} className={themename}><BsCheck2 size={35}/></button>
            <div id="titles" className={themename}>
            <h2>{props.title}</h2>
            </div>
            <div id="endl" className={themename}>
                <h4><BiTime size={20} id="clock" className={themename}/>  {props.deadline} </h4>
                <button id="delete" type="submit" onClick={DelItem}><RxCross1 size={20}/></button>
            </div>
        </form>
    )
}

export default NotDoneItem;