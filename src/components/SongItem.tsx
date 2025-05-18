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
  const [itemIsMenuShown, setIsItemMenuShown] = useState(false);
  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingURL, setIsEditingURL] = useState(false);
  const [newSongName, setNewSongName] = useState(song.name);
  const [newURL, setNewURL] = useState(song.url);
  const itemMenuRef = useRef<HTMLDivElement>(null);
  const inputNameRef = useRef<HTMLInputElement>(null);
  const inputURLRef = useRef<HTMLInputElement>(null);

  useClickOutside(itemMenuRef as React.RefObject<HTMLElement>, () => {
    setIsItemMenuShown(false);
    setIsEditingName(false);
    setIsEditingURL(false);
  });

  useClickOutside(inputNameRef as React.RefObject<HTMLElement>, () => {
    if (isEditingName) {
      if (newSongName.length === 0) {
        handleSongUpdate({ ...song, name: song.name });
        setNewSongName(song.name);
      } else {
        handleSongUpdate({ ...song, name: newSongName });
      }

      setIsItemMenuShown(false);
      setIsEditingName(false);
    }
  });

  useClickOutside(inputURLRef as React.RefObject<HTMLElement>, () => {
    if (isEditingURL) {
      if (newURL.length === 0) {
        handleSongUpdate({ ...song, url: song.url });
        setNewURL(song.url);
      } else {
        handleSongUpdate({ ...song, url: newURL });
      }

      setIsItemMenuShown(false);
      setIsEditingURL(false);
    }
  });

  useEffect(() => {
    if (inputNameRef.current !== null) {
      inputNameRef.current.focus();
    } else if (inputURLRef.current !== null) {
      inputURLRef.current.focus();
    }
  }, [isEditingName, isEditingURL]);

  return (
    <div className={style.SongItem}>
      {!isEditingName && (
        <p>
          {song.url.length === 0 ? (
            song.name
          ) : (
            <a href={song.url}>{song.name}</a>
          )}
        </p>
      )}

      {isEditingName && !isEditingURL && (
        <input
          ref={inputNameRef}
          value={newSongName}
          onChange={(e) => setNewSongName(e.target.value)}
          onBlur={() => {
            handleSongUpdate({ ...song, name: newSongName });
          }}
        />
      )}

      {isEditingURL && (
        <input
          ref={inputURLRef}
          value={newURL}
          onChange={(e) => setNewURL(e.target.value)}
          onBlur={() => {
            handleSongUpdate({ ...song, url: newURL });
          }}
        />
      )}

      {itemIsMenuShown ? (
        <div ref={itemMenuRef} className={style.SongItemMenu}>
          <ItemMenu
            onSongNameRename={() => {
              setIsItemMenuShown(false);
              handleSongUpdate(song);
              setIsEditingName(true);
            }}
            onSongURLEdit={() => {
              setIsItemMenuShown(false);
              handleSongUpdate(song);
              setIsEditingURL(true);
            }}
            onRemove={handleRemoveSong}
          />
        </div>
      ) : (
        <div className={style.SongShowItemMenuButton}>
          <button onClick={() => setIsItemMenuShown(true)}>Show menu</button>
        </div>
      )}
    </div>
  );
};

export default SongItem;
