import React from "react";
import deletes from "./delete.png";
import edit from "./edit.png";
import { useState } from "react";
const Box = (props) => {
  const [buttonName, changeName] = useState("Add");
  const [Index, changeIndex] = useState(0);
  const showEdit = (index) => {
    if (buttonName === "Edit") {
      changeName("Add");
    } else {
      changeName("Edit");
      changeIndex(index);
    }
  };
  // visible variable
  const [add, setVisible] = useState(0);
  //List Storage
  const [listItems, setListItems] = useState([]);
  // INput Storage
  const [title, setTitle] = useState("");
  /* Input visible Function */
  const showInput = () => {
    if (add == 0) setVisible(1);
    else {
      setVisible(0);
    }
  };
  // Adding Item to the List;
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
  // Adding Item to the list when Clicking on Enter button
  const handlePress = (e) => {
    if (e.key === "Enter") handleAddItem();
  };
  // Removing List Item
  const handleRemove = (index) => {
    const list = [...listItems];
    list.splice(index, 1);
    setListItems(list);
  };
  const changeInput = (index) => {
    setTitle(listItems[index].listitem);
    showEdit(index);
    showInput();
  };
  return (
    <div className="priority">
      <div className={add === 1 ? "shape" : "shapes"}>
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
        <button id='btn'onClick={handleAddItem}>{buttonName}</button>
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
                  src={deletes}
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
                  src={edit}
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

export default Box;
