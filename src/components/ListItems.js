import React, { useState } from "react";
import './ListItems.css';
import ListToDoItems from "../components/ListToDoItems";

const ListItems = (props) => {

    const [addItems,onAddItems] = useState(false);

    const AddScreenShow = () => {
        onAddItems(true);
    }
    return(
        <div id="wholeContain">
            <div id="container">
                <label>Today</label>
                <ListToDoItems itemlist={props}/>
                <div id="containfooter">
                    {addItems ? 
                    <form id ="AddItemsContainer">
                        <input type="text" placeholder="Task to do" id="titleinp"/>
                        <input type="text" placeholder="DeadLine" id="deadlineinp"/>
                        <button type="button" id="subbtn">Submit</button>
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