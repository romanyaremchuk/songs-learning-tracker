interface Props {
  setFilter: (filter: string) => void;
}

const SongsFilter = ({ setFilter }: Props) => {
  return (
    <div className="flex justify-center-safe">
      <button className="filter-btn-big" onClick={() => setFilter("all")}>
        All songs
      </button>
      <button
        className="filter-btn-big"
        onClick={() => setFilter("wantToLearn")}
      >
        To Learn
      </button>
      <button className="filter-btn-big" onClick={() => setFilter("learning")}>
        Learning
      </button>
      <button className="filter-btn-big" onClick={() => setFilter("learned")}>
        Learned
      </button>
    </div>
  );
};

export default SongsFilter;
