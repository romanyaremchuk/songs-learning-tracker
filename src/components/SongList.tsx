import { Song } from "../types/song";
import SongItem from "./SongItem";
import style from "./SongList.module.css";

interface Props {
  songs: Song[];
  header: string;
  setSongs: (songs: Song[]) => void;
  setSongName: (song: Song) => void;
}

const SongList = ({ songs, header, setSongs, setSongName }: Props) => {
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
            // handleSongRename={() => setSongName(song)}
            handleSongRename={(updatedSong) => {
              setSongName(updatedSong);
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
