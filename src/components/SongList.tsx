import { Song } from "../types/song";
import SongItem from "./SongItem";
import style from "./SongList.module.css";

interface Props {
  songs: Song[];
  header: string;
  setSongs: (songs: Song[]) => void;
}

const SongList = ({ songs, header, setSongs }: Props) => {
  const filteredSongs =
    header === "all" ? songs : songs.filter((song) => song.status === header);
  return (
    <>
      <h1>{header}</h1>
      <div className={style.SongList}>
        {filteredSongs.map((song) => (
          <SongItem
            key={song.id}
            song={song}
            handleRemoveSong={() =>
              setSongs(songs.filter((item) => item !== song))
            }
          />
        ))}
      </div>
    </>
  );
};

export default SongList;
