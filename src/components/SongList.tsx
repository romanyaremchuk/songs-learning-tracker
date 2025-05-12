import { Song } from "../types/song";
import SongItem from "./SongItem";
import style from "./SongList.module.css";

interface Props {
  songs: Song[];
  header: string;
  setSongs: (songs: Song[]) => void;
  setUpdatedSong: (song: Song) => void;
}

const SongList = ({ songs, header, setSongs, setUpdatedSong }: Props) => {
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
            handleSongUpdate={(updatedSong) => {
              setUpdatedSong(updatedSong);
              const updatedSongs = songs.map((songItem) =>
                songItem.id === updatedSong.id ? updatedSong : songItem
              );
              setSongs(updatedSongs);
            }}
          />
        ))}
      </div>
    </>
  );
};

export default SongList;
