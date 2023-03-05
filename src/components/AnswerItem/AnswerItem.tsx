import React from 'react';
import styles from './AnswerItem.module.css';
import { sanitize } from 'dompurify';

export interface IAnswerItem {
  text: string;
  onClick: () => void;
}

const AnswerItem: React.FC<IAnswerItem> = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      dangerouslySetInnerHTML={{ __html: sanitize(text) }}
      className={styles.item}
    />
  );
};

export default AnswerItem;
