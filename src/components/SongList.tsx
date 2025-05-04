import React from "react";
import { Song } from "../types/song";
import SongItem from "./SongItem";

const SongList = ({ songs, header }: { songs: Song[]; header: string }) => {
  return (
    <>
      <h1>{header}</h1>
      {songs.map((song) => (
        <SongItem song={song} />
      ))}
    </>
  );
};

export default SongList;
