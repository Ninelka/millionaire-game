import { createBrowserRouter, Navigate } from 'react-router-dom';
import { GameLayout, MainLayout } from '../layouts';

export const path = {
  START: '/',
  GAME: '/game',
  END: '/end',
};

export const router = createBrowserRouter([
  {
    path: path.START,
    element: <MainLayout />,
  },
  {
    path: path.GAME,
    element: <GameLayout />,
  },
  {
    path: '*',
    element: <Navigate to="/" />,
  },
]);
