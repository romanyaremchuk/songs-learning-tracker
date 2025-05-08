import React from "react";

const SongForm = () => {
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
    </>
  );
};

export default SongForm;
