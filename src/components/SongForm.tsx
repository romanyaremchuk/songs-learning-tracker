import React, { useState } from "react";
import { Song } from "../types/song";
import { v4 as uuidv4 } from "uuid";

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
    <form onSubmit={handleSubmit}>
      <label>
        {" "}
        Song name:{" "}
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          name="inputSongName"
        />{" "}
      </label>
      <label>
        {" "}
        URL:{" "}
        <input
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          name="inputURL"
        />{" "}
      </label>
      <label>
        <select onChange={handleSelectChange}>
          <option value={"wantToLearn"}>I want to learn</option>
          <option value={"learning"}>I am learning</option>
          <option value={"learned"}>I have learned</option>
        </select>
      </label>
      <button type="submit">Add song</button>
    </form>
  );
};

export default SongForm;
