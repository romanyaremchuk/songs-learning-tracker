import React from "react";
import style from "./ItemMenu.module.css";

interface Props {
  onRemove: () => void;
  onSongNameRename: () => void;
}

const ItemMenu = ({ onRemove, onSongNameRename }: Props) => {
  return (
    <div className={style.ItemMenu}>
      <button onClick={onSongNameRename} className={style.ItemMenuButton}>
        Rename
      </button>
      <button className={style.ItemMenuButton}>Edit URL</button>
      <button onClick={onRemove} className={style.ItemMenuButton}>
        Remove
      </button>
    </div>
  );
};

export default ItemMenu;
