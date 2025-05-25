import styles from "./SongsFilter.module.css";

interface Props {
  setFilter: (filter: string) => void;
}

const SongsFilter = ({ setFilter }: Props) => {
  return (
    <div>
      <button onClick={() => setFilter("all")}>All songs</button>
      <button onClick={() => setFilter("wantToLearn")}>To Learn</button>
      <button onClick={() => setFilter("learning")}>Learning</button>
      <button onClick={() => setFilter("learned")}>Learned</button>
    </div>
  );
};

export default SongsFilter;
