import React, { useEffect } from 'react';
import styles from './ActiveGame.module.css';
import { Question } from '../../components';
import { useGame } from '../../hooks/useGame';
import { useAppSelector } from '../../store';

const ActiveGame = () => {
  const { getQuestions } = useGame();
  const { questions, currentQuestionIndex } = useAppSelector(
    (store) => store.game
  );

  const currentQuestion = questions[currentQuestionIndex];

  useEffect(() => {
    getQuestions();
  }, []);

  useEffect(() => {
    console.log('currentQuestion: ', questions[currentQuestionIndex]);
  }, [questions, currentQuestion]);

  return (
    <div className={styles.question}>
      {!currentQuestion && <p>Questions is loading...</p>}
      {currentQuestion && (
        <Question
          correct_answer={currentQuestion.correct_answer}
          question={currentQuestion.question}
          incorrect_answers={currentQuestion.incorrect_answers}
        />
      )}
    </div>
  );
};

export default ActiveGame;
