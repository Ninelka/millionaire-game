import logo from '../../logo.svg';
import styles from './GameOver.module.css';
import { useGame } from '../../hooks/useGame';
import { Button } from '@mui/material';

const GameOver = () => {
  const { startGameHandler, currentReward, goToSettings } = useGame();

  return (
    <section className={styles.container}>
      <img src={logo} className={styles.logo} alt="millionaire game logo" />
      <h1 className={styles.title}>{`Your reward is $${currentReward}`}</h1>
      <div className={styles.actions}>
        <Button variant="contained" onClick={startGameHandler}>
          Start New Game
        </Button>
        <Button variant="contained" onClick={goToSettings}>
          Go to settings
        </Button>
      </div>
    </section>
  );
};

export default GameOver;
