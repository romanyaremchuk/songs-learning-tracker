import "./App.css";
import SongLists from "./components/SongLists";
import { Song } from "./types/song";
import { v4 as uuidv4 } from "uuid";

function App() {
  const test: Song[] = [
    {
      id: uuidv4(),
      name: "Zemfira",
      url: "",
      status: "learning",
    },
    {
      id: uuidv4(),
      name: "gspd",
      url: "https://cz.pinterest.com/liyanyuanxty/todo-list/",
      status: "learning",
    },
    {
      id: uuidv4(),
      name: "bi-2",
      url: "",
      status: "learned",
    },
    {
      id: uuidv4(),
      name: "kino",
      url: "",
      status: "learned",
    },
    {
      id: uuidv4(),
      name: "slim shady",
      url: "",
      status: "wantToLearn",
    },
  ];
  return (
    <>
      <SongLists songs={test} />
    </>
  );
}

export default App;
