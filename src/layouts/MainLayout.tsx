import { Outlet } from 'react-router-dom';
import styles from './styles/layout.module.css';

const MainLayout = () => {
  return (
    <main className={styles.start}>
      <Outlet />
    </main>
  );
};

export default MainLayout;
