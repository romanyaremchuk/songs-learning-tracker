import { useState } from "react";
import "./App.css";
import SongForm from "./components/SongForm";
import SongsFilter from "./components/SongsFilter";
import { FakeSongsData } from "./data/FakeData";
import SongList from "./components/SongList";
import { Song } from "./types/song";

function App() {
  const [filter, setFilter] = useState("all");
  const [songName, setSongName] = useState<Song | null>(null);
  const [songs, setSongs] = useState(FakeSongsData);

  return (
    <div className="AppRoot">
      <SongForm />
      <SongsFilter setFilter={setFilter} />
      <SongList
        songs={songs}
        setSongName={setSongName}
        setSongs={setSongs}
        header={filter}
      />
    </div>
  );
}

export default App;
