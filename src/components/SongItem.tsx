import React from "react";
import { Song } from "../types/song";
import ItemMenu from "./ItemMenu";
import style from "./SongItem.module.css";

const SongItem = ({ song }: { song: Song }) => {
  return (
    <div className={style.SongItem}>
      <p>
        {song.url.length === 0 ? song.name : <a href={song.url}>{song.name}</a>}
      </p>
      <div className={style.SongItemMenu}>
        <ItemMenu />
      </div>
    </div>
  );
};

export default SongItem;
