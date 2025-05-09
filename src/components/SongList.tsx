import React from "react";
import { Song } from "../types/song";
import SongItem from "./SongItem";
import style from "./SongList.module.css";

const SongList = ({ songs, header }: { songs: Song[]; header: string }) => {
  return (
    <>
      <h1>{header}</h1>
      <div className={style.SongList}>
        {songs.map((song) => (
          <SongItem song={song} />
        ))}
      </div>
    </>
  );
};

export default SongList;
