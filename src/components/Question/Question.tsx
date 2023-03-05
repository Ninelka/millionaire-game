import React from 'react';

import { sanitize } from 'dompurify';
import styles from './Question.module.css';
import AnswerList from '../AnswerList/AnswerList';

export interface IQuestion {
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

const Question: React.FC<IQuestion> = ({
  question,
  correct_answer,
  incorrect_answers,
}) => {
  return (
    <>
      <h1
        className={styles.title}
        dangerouslySetInnerHTML={{
          __html: sanitize(question),
        }}
      />
      <AnswerList
        answers={[...incorrect_answers, correct_answer]}
        correctAnswer={correct_answer}
      />
    </>
  );
};

export default Question;
