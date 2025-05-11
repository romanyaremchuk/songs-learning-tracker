import { useState } from "react";
import "./App.css";
import SongForm from "./components/SongForm";
import SongsFilter from "./components/SongsFilter";
import { FakeSongsData } from "./data/FakeData";
import SongList from "./components/SongList";

function App() {
  const [filter, setFilter] = useState("all");
  const [songs, setSongs] = useState(FakeSongsData);

  return (
    <div className="AppRoot">
      <SongForm />
      <SongsFilter setFilter={setFilter} />
      <SongList songs={songs} setSongs={setSongs} header={filter} />
    </div>
  );
}

export default App;
