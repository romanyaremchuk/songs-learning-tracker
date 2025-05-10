import React from "react";
import style from "./ItemMenu.module.css";

const ItemMenu = () => {
  return (
    <div className={style.ItemMenu}>
      <button>Delete</button>
      <button>Remove</button>
    </div>
  );
};

export default ItemMenu;
