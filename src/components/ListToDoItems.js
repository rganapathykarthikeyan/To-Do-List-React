import React, { useState, useContext } from "react";
import "./ListToDoItems.css";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import DoneItem from "./Item/DoneItem";
import NotDoneItem from "./Item/NotDoneItem";
import DataContext from "../store/dataContext";

const ListToDoItems = (props) => {
  const DataCxt = useContext(DataContext);
  const curtheme = DataCxt.theme;
  const themename = curtheme === "LIGHT" ? "" : "dark";
  const doneitems = props.itemlist.itemlist.filter((item) => item.done);
  const notdoneitems = props.itemlist.itemlist.filter((item) => !item.done);
  const [showdone, ChangeShowdone] = useState(false);
  const changeshowstate = () => {
    ChangeShowdone(!showdone);
  };
  const [refresh, onrefresh] = useState(false);
  const changeDoneState = (prop) => {
    for (let i = 0; i < props.itemlist.itemlist.length; i++) {
      if (props.itemlist.itemlist[i].id === prop) {
        props.itemlist.itemlist[i].done = !props.itemlist.itemlist[i].done;
      }
    }
    onrefresh(!refresh);
  };

  const onItemDelete = (prop) => {
    for (let i = 0; i < props.itemlist.itemlist.length; i++) {
      if (props.itemlist.itemlist[i].id === prop) {
        props.itemlist.itemlist.splice(i, 1);
        break;
      }
    }
    onrefresh(!refresh);
  };

  return (
    <div id="ListContainer" className={themename}>
      <div id="notDoneList" className={themename}>
        {notdoneitems.length === 0 ? (
          <div id="noPending" className={themename}>All Items Done - No Pending </div>
        ) : (
          notdoneitems.map((item) => (
            <NotDoneItem
              key={item.id}
              id={item.id}
              title={item.title}
              deadline={item.deadline}
              done={item.done}
              OnDone={changeDoneState}
              onDel={onItemDelete}
            />
          ))
        )}
      </div>
      {showdone ? (
        <div id="doneList" className={themename}>
          {doneitems.length === 0 ? (
            <div id="noPending" className={themename}>
              No Items Done
            </div>
          ) : (
            doneitems.map((item) => (
              <DoneItem
                key={item.id}
                id={item.id}
                title={item.title}
                deadline={item.deadline}
                done={item.done}
                OnDone={changeDoneState}
                onDel={onItemDelete}
              />
            ))
          )}
        </div>
      ) : (
        <div></div>
      )}
      <button id="showDone" onClick={changeshowstate} className={themename}>
        {showdone ? (
          <div id="trigger" className={themename}>
            <h3>Don't Show Done</h3>
            <AiOutlineArrowUp size={20} />
          </div>
        ) : (
          <div id="trigger" className={themename}>
            <h3>Show Done</h3>
            <AiOutlineArrowDown size={20} />
          </div>
        )}
      </button>
    </div>
  );
};

export default ListToDoItems;
