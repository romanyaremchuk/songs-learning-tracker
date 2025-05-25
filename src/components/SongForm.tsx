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
      className="flex items-center justify-between p-4 background bg-red-300"
      onSubmit={handleSubmit}
    >
      <label className="font-bold mb-2">
        {" "}
        Song name:{" "}
        <input
          className="border p-2 w-full"
          value={name}
          onChange={(e) => setName(e.target.value)}
          name="inputSongName"
        />{" "}
      </label>
      <label className="font-bold mb-2">
        {" "}
        URL:{" "}
        <input
          className="border p-2 w-full"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          name="inputURL"
        />{" "}
      </label>
      <label>
        <SongStatusDropdown
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
