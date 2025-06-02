import React, { useState } from "react";
import { Song } from "../types/song";
import { v4 as uuidv4 } from "uuid";
import SongStatusDropdown from "./SongStatusDropdown";

interface Props {
  songs: Song[];
  setSongs: (songs: Song[]) => void;
}

const SongForm = ({ songs, setSongs }: Props) => {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [status, setStatus] = useState<"wantToLearn" | "learning" | "learned">(
    "wantToLearn"
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newSong = { id: uuidv4(), name: name, url: url, status: status };
    setSongs([...songs, newSong]);
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStatus(e.target.value as "wantToLearn" | "learning" | "learned");
  };

  return (
    <form
      className="flex justify-center-safe p-2.5 background bg-red-300"
      onSubmit={handleSubmit}
    >
      <label>
        {" "}
        Song name:{" "}
        <input
          className="border ml-2.5 p-2 h-10"
          value={name}
          onChange={(e) => setName(e.target.value)}
          name="inputSongName"
        />{" "}
      </label>
      <label className="ms-5">
        {" "}
        URL:{" "}
        <input
          className="border ml-2.5 p-2 h-10"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          name="inputURL"
        />{" "}
      </label>
      <label>
        <SongStatusDropdown
          styles="border ms-5 p-2 h-10"
          value={status}
          handleSelectChange={handleSelectChange}
        />
      </label>
      <button className="filter-btn" type="submit">
        Add song
      </button>
    </form>
  );
};

export default SongForm;
