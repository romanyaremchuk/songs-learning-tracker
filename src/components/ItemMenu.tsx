import React from "react";
import style from "./ItemMenu.module.css";

interface Props {
  onRemove: () => void;
}

const ItemMenu = ({ onRemove }: Props) => {
  return (
    <div className={style.ItemMenu}>
      <button className={style.ItemMenuButton}>Rename</button>
      <button className={style.ItemMenuButton}>Edit URL</button>
      <button onClick={onRemove} className={style.ItemMenuButton}>
        Remove
      </button>
    </div>
  );
};

export default ItemMenu;
