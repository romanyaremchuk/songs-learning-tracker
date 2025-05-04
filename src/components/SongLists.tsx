import React from "react";
import { Song } from "../types/song";
import SongList from "./SongList";

const SongLists = ({ songs }: { songs: Song[] }) => {
  const wantToLearn = songs.filter((song) => song.status === "wantToLearn");
  const learning = songs.filter((song) => song.status === "learning");
  const learned = songs.filter((song) => song.status === "learned");
  return (
    <>
      <SongList songs={wantToLearn} header="wantToLearn" />
      <SongList songs={learning} header="learning" />
      <SongList songs={learned} header="learned" />
    </>
  );
};

export default SongLists;
