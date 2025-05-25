interface Props {
  setFilter: (filter: string) => void;
}

const SongsFilter = ({ setFilter }: Props) => {
  return (
    <div>
      <button className="filter-btn" onClick={() => setFilter("all")}>
        All songs
      </button>
      <button className="filter-btn" onClick={() => setFilter("wantToLearn")}>
        To Learn
      </button>
      <button className="filter-btn" onClick={() => setFilter("learning")}>
        Learning
      </button>
      <button className="filter-btn" onClick={() => setFilter("learned")}>
        Learned
      </button>
    </div>
  );
};

export default SongsFilter;
