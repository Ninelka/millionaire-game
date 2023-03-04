import { Outlet } from 'react-router-dom';
import styles from './styles/layout.module.css';

const GameLayout = () => {
  return (
    <main className={styles.game}>
      <Outlet />
    </main>
  );
};

export default GameLayout;
