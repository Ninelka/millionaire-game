import { useNavigate } from 'react-router-dom';
import styles from './NewGame.module.css';
import { path } from '../../router/router';
import logo from './../../logo.svg';

const NewGame = () => {
  const navigate = useNavigate();

  const startGameHandler = () => {
    navigate(path.GAME);
  };

  return (
    <section className={styles.container}>
      <img src={logo} className={styles.logo} alt="millionaire game logo" />
      <h1 className={styles.title}>Who wants to be a millionaire?</h1>
      <button onClick={startGameHandler}>Start</button>
    </section>
  );
};

export default NewGame;
