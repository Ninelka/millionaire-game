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
import { useState } from 'react';
import { delay } from '../helpers/delay';

export const useGame = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { questions, currentQuestionIndex, currentReward, amountOfQuestions } =
    useAppSelector((store) => store.game);
  const [answerClicked, setAnswerClicked] = useState<boolean>(false);

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
    setAnswerClicked(true);

    if (currentQuestionIndex === questions.length - 1) {
      delay(1000, () => {
        setAnswerClicked(false);
        navigate(path.END);
      });
    } else if (userAnswer === correctAnswer) {
      delay(1000, () => {
        setAnswerClicked(false);
        delay(300, () => {
          dispatch(goToNextQuestion());
        });
      });
    } else {
      delay(1000, () => {
        setAnswerClicked(false);
        navigate(path.END);
      });
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
    answerClicked,
  };
};
