import React from "react"
import ToDoItem from "./ToDoItem";
import './ListToDoItems.css'

const ListToDoItems = (props) => {
    const doneitems = props.itemlist.itemlist.filter((item) => item.done);
    const notdoneitems = props.itemlist.itemlist.filter((item) => !item.done);
    return(
        <div id="ListContainer">
            <div id ="notDoneList">
            {notdoneitems.map((item) => (
                <ToDoItem 
                    key={item.id}
                    title={item.title}
                    deadline={item.deadline}
                    done={item.done}
                />
            ))}
            </div>
            <div id ="doneList">
            {doneitems.map((item) => (
                <ToDoItem 
                    key={item.id}
                    title={item.title}
                    deadline={item.deadline}
                    done={item.done}
                />
            ))}
            </div>
        </div>
    )
}

export default ListToDoItems;