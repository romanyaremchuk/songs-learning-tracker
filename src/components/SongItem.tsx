import React, { useEffect, useRef, useState } from "react";
import { Song } from "../types/song";
import ItemMenu from "./ItemMenu";
import style from "./SongItem.module.css";
import useClickOutside from "../hooks/useClickOutside";

interface Props {
  song: Song;
  handleRemoveSong: () => void;
  handleSongUpdate: (song: Song) => void;
}

const SongItem = ({ song, handleRemoveSong, handleSongUpdate }: Props) => {
  const [itemMenuShown, setItemMenuShown] = useState(false);
  const [isEditingName, setIsEditingName] = useState(false);
  const [newSongName, setNewSongName] = useState(song.name);
  const itemMenuRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useClickOutside(itemMenuRef as React.RefObject<HTMLElement>, () => {
    setItemMenuShown(false);
    setIsEditingName(false);
  });

  useClickOutside(inputRef as React.RefObject<HTMLElement>, () => {
    if (isEditingName) {
      if (newSongName.length === 0) {
        handleSongUpdate({ ...song, name: song.name });
        setNewSongName(song.name);
      } else {
        handleSongUpdate({ ...song, name: newSongName });
      }

      setItemMenuShown(false);
      setIsEditingName(false);
    }
  });

  useEffect(() => {
    inputRef.current?.focus();
  }, [isEditingName]);

  return (
    <div className={style.SongItem}>
      {isEditingName ? (
        <input
          ref={inputRef}
          value={newSongName}
          onChange={(e) => setNewSongName(e.target.value)}
          onBlur={() => {
            handleSongUpdate({ ...song, name: newSongName });
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
        <div ref={itemMenuRef} className={style.SongItemMenu}>
          <ItemMenu
            onSongNameRename={() => {
              setItemMenuShown(false);
              handleSongUpdate(song);
              setIsEditingName(true);
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
