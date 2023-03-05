import styles from './NewGame.module.css';
import logo from './../../logo.svg';
import { useGame } from '../../hooks/useGame';

const NewGame = () => {
  const { startGameHandler } = useGame();

  return (
    <section className={styles.container}>
      <img src={logo} className={styles.logo} alt="millionaire game logo" />
      <h1 className={styles.title}>Who wants to be a millionaire?</h1>
      <button onClick={startGameHandler}>Start</button>
    </section>
  );
};

export default NewGame;
