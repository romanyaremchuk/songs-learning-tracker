import React from "react";
import styles from "./SongsFilter.module.css";

interface Props {
  setFilter: (filter: string) => void;
}

const SongsFilter = ({ setFilter }: Props) => {
  return (
    <div className={styles.SongsFilter}>
      <button className={styles.buttonStyle} onClick={() => setFilter("all")}>
        All songs
      </button>
      <button
        className={styles.buttonStyle}
        onClick={() => setFilter("wantToLearn")}
      >
        To Learn
      </button>
      <button
        className={styles.buttonStyle}
        onClick={() => setFilter("learning")}
      >
        Learning
      </button>
      <button
        className={styles.buttonStyle}
        onClick={() => setFilter("learned")}
      >
        Learned
      </button>
    </div>
  );
};

export default SongsFilter;
