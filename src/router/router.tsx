import { createBrowserRouter, Navigate } from 'react-router-dom';
import { GameLayout, MainLayout } from '../layouts';
import { ActiveGamePage, GameOverPage, NewGamePage } from '../pages';

export const path = {
  START: '/',
  GAME: '/game',
  END: '/end',
};

export const router = createBrowserRouter([
  {
    path: path.START,
    element: <MainLayout />,
    children: [
      {
        path: path.START,
        element: <NewGamePage />,
      },
      {
        path: path.END,
        element: <GameOverPage />,
      },
    ],
  },
  {
    path: path.GAME,
    element: <GameLayout />,
    children: [
      {
        path: path.GAME,
        element: <ActiveGamePage />,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to="/" />,
  },
]);
