import React from "react";
import styles from "@/app/styles/Games.module.scss";
import AllGames from "@/app/components/games/AllGames";

const Games = () => {
  return (
    <div className={styles.allGames}>
      <div className={styles.title}>
        <h3>All games</h3>
      </div>
      <div className={styles.container}>
        <AllGames />
      </div>
    </div>
  );
};

export default Games;
