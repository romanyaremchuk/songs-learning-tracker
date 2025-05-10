import React, { useRef, useState } from "react";
import { Song } from "../types/song";
import ItemMenu from "./ItemMenu";
import style from "./SongItem.module.css";
import useClickOutside from "../hooks/useClickOutside"; // убедись, что хук есть

const SongItem = ({ song }: { song: Song }) => {
  const [itemMenuShown, setItemMenuShown] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useClickOutside(wrapperRef as React.RefObject<HTMLElement>, () => {
    setItemMenuShown(false);
  });
  return (
    <div className={style.SongItem}>
      <p>
        {song.url.length === 0 ? song.name : <a href={song.url}>{song.name}</a>}
      </p>
      {itemMenuShown ? (
        <div ref={wrapperRef} className={style.SongItemMenu}>
          <ItemMenu />
        </div>
      ) : (
        <div className={style.SongShowItemMenuButton}>
          <button onClick={() => setItemMenuShown(true)}>Show menu</button>
        </div>
      )}
    </div>
  );
};

export default SongItem;
