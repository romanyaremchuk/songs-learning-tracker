import React, { useState } from "react";
import { Song } from "../types/song";

interface Props {
  songs: Song[];
  setSongs: (songs: Song[]) => void;
}

const SongForm = ({ songs, setSongs }: Props) => {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [status, setStatus] = useState("wantToLearn");
  const [newSong, setNewSong] = useState<Song>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setNewSong({ id: uuidv4(), url: "", name: "", status: status });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        {" "}
        Song name:{" "}
        <input
          value={newSong?.name}
          onChange={(e) => setName(e.target.value)}
          name="inputSongName"
        />{" "}
      </label>
      <label>
        {" "}
        URL: <input
          onChange={(e) => setUrl(e.target.value)}
          name="inputURL"
        />{" "}
      </label>
      <label>
        <select>
          <option onClick={() => setStatus("wantToLearn")}>
            I want to learn
          </option>
          <option onClick={() => setStatus("learning")}>I am learning</option>
          <option onClick={() => setStatus("learned")}>I have learned</option>
        </select>
      </label>
      <button type="submit">Add song</button>
    </form>
  );
};

export default SongForm;
function uuidv4(): string {
  throw new Error("Function not implemented.");
}
