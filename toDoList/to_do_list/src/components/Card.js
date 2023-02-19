import React from "react";
import { useState } from "react";
import deleteIcon from "./delete.png";
import editIcon from "./edit.png";
const Card = (props) => {
  let x = 0;
  const [buttonName, changeName] = useState("Add");
  const [Index, changeIndex] = useState(0);
  const showEdit = (index) => {
    x++;
    console.log(x);
    if (buttonName === "Edit") {
      changeName("Add");
    } else {
      changeName("Edit");
      changeIndex(index);
    }
  };
  //---------------------------------------------------------------------//
  const [add, setVisible] = useState(0);
  const [listItems, setListItems] = useState([]);
  const [title, setTitle] = useState("");
  const showInput = () => {
    if (add === 0) setVisible(1);
    else {
      setVisible(0);
    }
  };
  //------------------------------------------------------------------//
  const handleAddItem = () => {
    if (buttonName === "Edit") {
      let list = [...listItems];
      list[Index].listitem = `${title}`;
      setListItems(list);
      showEdit();
    } else {
      if (title === " " || title === "") setListItems([...listItems]);
      else setListItems([...listItems, { listitem: `${title}` }]);
    }
    setTitle("");
    showInput();
  };
  //-------------------------------------------------------------------------//
  const handlePress = (e) => {
    if (e.key === "Enter") handleAddItem();
  };
  //-------------------------------------------------------------------------//
  const handleRemove = (index) => {
    const list = [...listItems];
    list.splice(index, 1);
    setListItems(list);
  };
  //--------------------------------------------------------------------------//
  const changeInput = (index) => {
    setTitle(listItems[index].listitem);
    showEdit(index);
    showInput();
  };
  return (
    <div className="priority">
      <div className={add === 1 ? "show" : "show1"}>
        <div className="box"></div>
        <div className="triangle"></div>
      </div>
      <div className={add === 1 ? "visible" : "notVisible"}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onKeyPress={handlePress}
        />
        <button id="btn" onClick={handleAddItem}>
          {buttonName}
        </button>
      </div>
      <div className="data">
        <section className={props.className} id="head">
          <p>{props.className}</p>
          <p onClick={showInput}>+</p>
        </section>
        <section className="listitems">
          {listItems.map((item, index) => (
            <div className="listItem">
              <div className="input">
                <input type="checkbox" />
              </div>
              <div className="task">
                <p>{item.listitem}</p>
              </div>
              <div className="delete">
                <img
                  src={deleteIcon}
                  alt=""
                  width="10px"
                  height="10px"
                  onClick={() => {
                    handleRemove(index);
                  }}
                />
              </div>
              <div className="edit">
                <img
                  src={editIcon}
                  alt=""
                  width="10px"
                  height="10px"
                  onClick={() => {
                    changeInput(index);
                  }}
                />
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Card;
