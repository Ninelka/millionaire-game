import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
  useAppDispatch,
  useAppSelector,
  getAllQuestions,
  goToNextQuestion,
  resetGame,
} from '../store';
import { path } from '../router/router';

export const useGame = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { questions, currentQuestionIndex, currentReward, amountOfQuestions } =
    useAppSelector((store) => store.game);

  const url = `https://opentdb.com/api.php?amount=${amountOfQuestions}`;
  async function getQuestions() {
    return await axios.get(url).then((response) => {
      dispatch(getAllQuestions(response.data.results));
    });
  }

  const startGameHandler = () => {
    dispatch(resetGame());
    navigate(path.GAME);
  };

  const goToSettings = () => {
    navigate(path.START);
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
    goToSettings,
  };
};
