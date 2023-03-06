import React from 'react';
import styles from './AnswerItem.module.css';
import { sanitize } from 'dompurify';
import { Button } from '@mui/material';

export interface IAnswerItem {
  text: string;
  onClick: () => void;
}

const AnswerItem: React.FC<IAnswerItem> = ({ text, onClick }) => {
  return (
    <Button variant="contained" onClick={onClick} className={styles.item}>
      <span dangerouslySetInnerHTML={{ __html: sanitize(text) }} />
    </Button>
  );
};

export default AnswerItem;
