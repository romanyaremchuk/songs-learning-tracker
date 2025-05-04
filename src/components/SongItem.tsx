import React from "react";
import { Song } from "../types/song";

const SongItem = ({ song }: { song: Song }) => {
  return (
    <>
      {song.url.length === 0 ? (
        <h6>{song.name}</h6>
      ) : (
        <h6>
          <a href={song.url}>{song.name}</a>
        </h6>
      )}
    </>
  );
};

export default SongItem;
