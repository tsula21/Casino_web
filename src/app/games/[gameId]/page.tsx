import { notFound } from "next/navigation";
import games from "@/app/data/games.json";
import Image from "next/image";
import styles from "@/app/styles/GameDetails.module.scss";

interface GamePageProps {
  params: { gameId: string };
}

const SingleGame = ({ params }: GamePageProps) => {
  const gameId = Number(params.gameId);
  const game = games.find((g) => g.id === gameId);

  // If not found shows 404 page
  if (!game) return notFound();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{game.name}</h1>
      <div className={styles.details}>
        <Image
          src={game.image}
          alt={game.name}
          width={600}
          height={800}
          className={styles.image}
        />
        <div className={styles.info}>
          <p>
            <strong>Provider:</strong> {game.provider}
          </p>
          <p>
            <strong>Type:</strong>
            {game.type == "casino" ? "Live Casino" : game.type}
          </p>
          <p>
            <strong>Rating:</strong> ⭐ {game.rate}
          </p>
          <p className={styles.description}>{game.description}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleGame;
