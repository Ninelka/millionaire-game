import logo from '../../logo.svg';
import styles from './GameOver.module.css';
import { useGame } from '../../hooks/useGame';

const GameOver = () => {
  const { startGameHandler, currentReward } = useGame();

  return (
    <section className={styles.container}>
      <img src={logo} className={styles.logo} alt="millionaire game logo" />
      <h1 className={styles.title}>{`Your reward is $${currentReward}`}</h1>
      <button onClick={startGameHandler}>Start New Game</button>
    </section>
  );
};

export default GameOver;
