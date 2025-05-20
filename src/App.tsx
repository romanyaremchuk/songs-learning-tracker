import { useState } from "react";
import "./App.css";
import SongForm from "./components/SongForm";
import SongsFilter from "./components/SongsFilter";
import { FakeSongsData } from "./data/FakeData";
import SongList from "./components/SongList";
import { Song } from "./types/song";

function App() {
  const [filter, setFilter] = useState("all");
  //TODO may be use as update of whole song? not just name
  const [updatedSong, setUpdatedSong] = useState<Song | null>(null);
  const [songs, setSongs] = useState(FakeSongsData);

  return (
    <div className="AppRoot">
      <SongForm songs={songs} setSongs={setSongs} />
      <SongsFilter setFilter={setFilter} />
      <SongList
        songs={songs}
        setUpdatedSong={setUpdatedSong}
        setSongs={setSongs}
        header={filter}
      />
    </div>
  );
}

export default App;
