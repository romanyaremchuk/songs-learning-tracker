import React from "react";

const SongForm = () => {
  //const [filter, setFilter] = useState("all");

  return (
    <>
      <label>
        {" "}
        Song name: <input name="inputSongName" />{" "}
      </label>
      <label>
        {" "}
        URL: <input name="inputURL" />{" "}
      </label>
      <button type="submit">Add song</button>
      <label>
        <select>
          <option>I want to learn</option>
          <option>I am learning</option>
          <option>I have learned</option>
        </select>
      </label>
    </>
  );
};

export default SongForm;
