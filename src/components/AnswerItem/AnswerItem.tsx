import React from 'react';
import styles from './AnswerItem.module.css';
import { sanitize } from 'dompurify';
import { Button } from '@mui/material';

export interface IAnswerItem {
  text: string;
  onClick: () => void;
  isCorrect?: boolean;
}

const AnswerItem: React.FC<IAnswerItem> = ({ text, onClick, isCorrect }) => {
  return (
    <Button
      variant="contained"
      color={isCorrect ? 'success' : 'info'}
      onClick={onClick}
      className={styles.item}
    >
      <span dangerouslySetInnerHTML={{ __html: sanitize(text) }} />
    </Button>
  );
};

export default AnswerItem;
