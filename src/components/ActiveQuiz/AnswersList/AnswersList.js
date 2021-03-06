import React from 'react';
import styles from './AnswersList.module.css';
import AnswerItem from './AnswerItem/AnswerItem';

const AnswersList = props => {
  return (
    <ul className={styles.AnswersList}>
      {props.answers.map(answer => {
        return <AnswerItem key={answer.id} answer={answer} onAnswerClick={props.onAnswerClick} />;
      })}
    </ul>
  );
};

export default AnswersList;
