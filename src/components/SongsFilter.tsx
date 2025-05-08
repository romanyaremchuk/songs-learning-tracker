import React from "react";
import styles from "./SongsFilter.module.css";

const SongsFilter = () => {
  return (
    <div className={styles.SongsFilter}>
      <button className={styles.buttonStyle}>All songs</button>
      <button className={styles.buttonStyle}>To Learn</button>
      <button className={styles.buttonStyle}>Learning</button>
      <button className={styles.buttonStyle}>Learned</button>
    </div>
  );
};

export default SongsFilter;
