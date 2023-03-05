import React, { useMemo } from 'react';
import AnswerItem from '../AnswerItem/AnswerItem';
import styles from './AnswerList.module.css';
import { useGame } from '../../hooks/useGame';
import { shuffleArray } from '../../helpers/shuffleArray';

interface IAnswerList {
  answers: string[];
  correctAnswer: string;
}

const AnswerList: React.FC<IAnswerList> = ({ answers, correctAnswer }) => {
  const { checkUserAnswer } = useGame();

  const shuffledAnswers = useMemo(() => {
    return shuffleArray(answers);
  }, [answers]);

  return (
    <div className={styles.list}>
      {shuffledAnswers?.map((item) => (
        <AnswerItem
          key={item}
          text={item}
          onClick={() => checkUserAnswer(item, correctAnswer)}
        />
      ))}
    </div>
  );
};

export default AnswerList;
