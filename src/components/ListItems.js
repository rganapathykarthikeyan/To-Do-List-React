import React, { useState } from "react";
import './ListItems.css';
import ListToDoItems from "../components/ListToDoItems";

const ListItems = (props) => {

    const [addItems,onAddItems] = useState(false);
    const [etitle, setTitle] = useState('');
    const [edeadline, setDeadline] = useState('');
    const [newid, setNewId] = useState(5);

    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
    }

    const deadlineChangeHandler = (event) => {
        setDeadline(event.target.value);
    }

    const AddScreenShow = () => {
        onAddItems(true);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const todoitem = {
            id: newid,
            title: etitle,
            deadline : edeadline,
            done : false,
        }
        props.addTodoItemHandler(todoitem);
        setTitle('');
        setDeadline('');
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
                        <input type="text" placeholder="Task to do" onChange={titleChangeHandler} id="titleinp"/>
                        <input type="text" placeholder="DeadLine" onChange={deadlineChangeHandler} id="deadlineinp"/>
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