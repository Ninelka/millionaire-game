import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store/store';
import {
  getAllQuestions,
  goToNextQuestion,
  resetGame,
} from '../store/gameSlice';
import { path } from '../router/router';

const url = 'https://opentdb.com/api.php?amount=5';

export const useGame = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  async function getQuestions() {
    return await axios.get(url).then((response) => {
      dispatch(getAllQuestions(response.data.results));
    });
  }

  const { questions, currentQuestionIndex, currentReward } = useAppSelector(
    (store) => store.game
  );

  const startGameHandler = () => {
    dispatch(resetGame());
    navigate(path.GAME);
  };

  const checkUserAnswer = (userAnswer: string, correctAnswer: string) => {
    if (currentQuestionIndex === questions.length - 1) {
      navigate(path.END);
    } else if (userAnswer === correctAnswer) {
      dispatch(goToNextQuestion());
    } else {
      navigate(path.END);
    }
  };

  return {
    startGameHandler,
    getQuestions,
    questions,
    currentQuestionIndex,
    goToNextQuestion,
    checkUserAnswer,
    currentReward,
  };
};
