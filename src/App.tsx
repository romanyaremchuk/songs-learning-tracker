import "./App.css";
import SongForm from "./components/SongForm";
import SongLists from "./components/SongLists";
import SongsFilter from "./components/SongsFilter";
import { FakeSongsData } from "./data/FakeData";

function App() {
  return (
    <div className="AppRoot">
      <SongForm />
      <SongsFilter />
      <SongLists songs={FakeSongsData} />
    </div>
  );
}

export default App;
