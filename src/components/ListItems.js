import React, { useState, useRef } from "react";
import './ListItems.css';
import ListToDoItems from "../components/ListToDoItems";

const ListItems = (props) => {

    const [addItems,onAddItems] = useState(false);
    const [newid, setNewId] = useState(5);
    const titleRef = useRef();
    const deadlineRef = useRef();


    const AddScreenShow = () => {
        onAddItems(true);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const enteredtitle = titleRef.current.value;
        const entereddeadline = deadlineRef.current.value;
        const todoitem = {
            id: newid,
            title: enteredtitle,
            deadline : entereddeadline,
            done : false,
        }
        props.addTodoItemHandler(todoitem);
        titleRef.current.value = "";
        deadlineRef.current.value = "";
        onAddItems(false);
        setNewId(newid+1);
    }

    return(
        <div id="wholeContain">
            <div id="container">
                <label>Today</label>
                <ListToDoItems itemlist={props}/>
                <div id="containfooter">
                    {addItems ? 
                    <form id ="AddItemsContainer" onSubmit={submitHandler}>
                        <input type="text" placeholder="Task to do" ref={titleRef} id="titleinp"/>
                        <input type="text" placeholder="DeadLine" ref={deadlineRef} id="deadlineinp"/>
                        <button type="submit" id="subbtn">Submit</button>
                    </form> : 
                    <div id="DoAddContainer">
                        <h3>What to do today? Add Now</h3>
                        <button id="addbtn" type="button" onClick={AddScreenShow}>&gt;&gt;</button>
                    </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default ListItems;