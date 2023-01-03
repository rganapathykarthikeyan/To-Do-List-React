import React from "react";
import DoneItem from "./Item/DoneItem";
import NotDoneItem from "./Item/NotDoneItem";
import './ToDoItem.css'

const ToDoItem = (props) => {

    return(
        <div id="ItemContainer">
            {props.done ? <DoneItem item={props}/>: <NotDoneItem item={props}/>}
        </div>
    )
}

export default ToDoItem;