import React, { useRef, useState } from "react";
import { Song } from "../types/song";
import ItemMenu from "./ItemMenu";
import style from "./SongItem.module.css";
import useClickOutside from "../hooks/useClickOutside";

interface Props {
  song: Song;
  handleRemoveSong: () => void;
  handleSongRename: (song: Song) => void;
}

const SongItem = ({ song, handleRemoveSong, handleSongRename }: Props) => {
  const [itemMenuShown, setItemMenuShown] = useState(false);
  const [songNameEdit, setSongNameEdit] = useState(false);
  const [newSongName, setNewSongName] = useState(song.name);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useClickOutside(wrapperRef as React.RefObject<HTMLElement>, () => {
    setItemMenuShown(false);
    setSongNameEdit(false);
  });

  return (
    <div className={style.SongItem}>
      {songNameEdit ? (
        <input
          ref={inputRef}
          value={newSongName}
          onChange={(e) => setNewSongName(e.target.value)}
          onBlur={() => {
            handleSongRename({ ...song, name: newSongName });
            console.log(newSongName);
          }}
        />
      ) : (
        <p>
          {song.url.length === 0 ? (
            song.name
          ) : (
            <a href={song.url}>{song.name}</a>
          )}
        </p>
      )}

      {itemMenuShown ? (
        <div ref={wrapperRef} className={style.SongItemMenu}>
          <ItemMenu
            onSongNameRename={() => {
              setItemMenuShown(false);
              handleSongRename(song);
              setSongNameEdit(true);
            }}
            onRemove={handleRemoveSong}
          />
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
