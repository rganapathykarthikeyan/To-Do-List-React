import React from "react"
import ToDoItem from "./ToDoItem";
import './ListToDoItems.css'

const ListToDoItems = (props) => {
    const doneitems = props.itemlist.itemlist.filter((item) => item.done);
    const notdoneitems = props.itemlist.itemlist.filter((item) => !item.done);
    console.log(doneitems);
    console.log(notdoneitems);
    return(
        <div id="ListContainer">
            {notdoneitems.map((item) => (
                <ToDoItem 
                    key={item.id}
                    title={item.title}
                    deadline={item.deadline}
                    done={item.done}
                />
            ))}
            {doneitems.map((item) => (
                <ToDoItem 
                    key={item.id}
                    title={item.title}
                    deadline={item.deadline}
                    done={item.done}
                />
            ))}
        </div>
    )
}

export default ListToDoItems;