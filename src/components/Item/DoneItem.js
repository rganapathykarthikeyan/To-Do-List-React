import React, {useContext} from "react";
import { BsCheck2, BsTrash } from 'react-icons/bs';
import './DoneItem.css'
import DataContext from "../../store/dataContext";



const DoneItem = (props) => {
    const DataCxt = useContext(DataContext);
    const curtheme = DataCxt.theme;
    const themename = (curtheme === "LIGHT") ? "" : "dark"
    const ChangeDoneState = () => {
        props.OnDone(props.id);
    }

    const DelItem = () => {
        props.onDel(props.id);
    }

    return(
        <form id="ItemContainer" >
            <button id="doneTick" type="button" onClick={ChangeDoneState} className={themename}><BsCheck2 size={35}/></button>
            <div id="title" className={themename}>
            <h2 id="tasktitle">{props.title}</h2>
            </div>
            <div id="end">
                <button id="del" type="submit" onClick={DelItem} className={themename}><BsTrash size={20}/></button>
            </div>
        </form>
    )
}

export default DoneItem;