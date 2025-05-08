import { useEffect, useState } from "react";
import "./App.css";
import SongForm from "./components/SongForm";
import SongLists from "./components/SongLists";
import SongsFilter from "./components/SongsFilter";
import { FakeSongsData } from "./data/FakeData";
import SongList from "./components/SongList";

function App() {
  const [filter, setFilter] = useState("all");

  const filteredSongs =
    filter === "all"
      ? FakeSongsData
      : FakeSongsData.filter((song) => song.status === filter);

  return (
    <div className="AppRoot">
      <SongForm />
      <SongsFilter setFilter={setFilter} />
      <SongList songs={filteredSongs} header={filter} />
    </div>
  );
}

export default App;
