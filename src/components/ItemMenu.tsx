import React from "react";
import style from "./ItemMenu.module.css";

const ItemMenu = () => {
  return (
    <div className={style.ItemMenu}>
      <button className={style.ItemMenuButton}>Delete</button>
      <button className={style.ItemMenuButton}>Remove</button>
    </div>
  );
};

export default ItemMenu;
