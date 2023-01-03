import React from "react";
import './ToDoItem.css'

const ToDoItem = (props) => {
    return(
        <div id="ItemContainer">
            <h3>{props.title}</h3>
        </div>
    )
}

export default ToDoItem;