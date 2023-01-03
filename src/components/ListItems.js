import React from "react";
import './ListItems.css';
import ListToDoItems from "../components/ListToDoItems";

const ListItems = (props) => {
    return(
        <div id="wholeContain">
            <div id="container">
                <label>Today</label>
                <ListToDoItems itemlist={props}/>
                <div id="containfooter">
                    <h3>What to do today?</h3>
                    <h3>&gt;&gt;</h3>
                </div>
            </div>
        </div>
    )
}

export default ListItems;