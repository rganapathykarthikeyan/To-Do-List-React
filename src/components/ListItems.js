import React, { useState,useEffect, useContext } from "react";
import './ListItems.css';
import ListToDoItems from "../components/ListToDoItems";
import DataContext from "../store/dataContext";

const ListItems = (props) => {
    const DataCxt = useContext(DataContext);
    const curtheme = DataCxt.theme;
    const themename = (curtheme === "LIGHT") ? "" : "dark"
    const [addItems,onAddItems] = useState(false);
    const [etitle, setTitle] = useState('');
    const [edeadline, setDeadline] = useState('');
    const [newid, setNewId] = useState(5);
    const [disable, setDisable] = useState(true);

    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
    }

    const deadlineChangeHandler = (event) => {
        setDeadline(event.target.value);
    }

    useEffect(()=>{
        if(etitle.trim().length > 1 && edeadline.trim().length > 0){
            setDisable(false);
        }
        else{
            setDisable(true);
        }
    },[etitle, edeadline])

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
        <div id="wholeContain" className={themename}>
            <div id="container" className={themename}>
                <label className={themename}>Today</label>
                <ListToDoItems itemlist={props}/>
                <div id="containfooter" className={themename}>
                    {addItems ? 
                    <form id ="AddItemsContainer" onSubmit={submitHandler}>
                        <input type="text" placeholder="Task to do" onChange={titleChangeHandler} id="titleinp" className={themename}/>
                        <input type="text" placeholder="DeadLine" onChange={deadlineChangeHandler} id="deadlineinp" className={themename}/>
                        <button type="submit" disabled={disable} id="subbtn" className={themename}>Submit</button>
                    </form> : 
                    <div id="DoAddContainer" >
                        <h3 id="addlabel"className={themename}>What to do today? Add Now</h3>
                        <button id="addbtn" type="button" onClick={AddScreenShow} className={themename}>&gt;&gt;</button>
                    </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default ListItems;