import React from 'react';
import styles from './ActiveQuiz.module.css';
import AnswersList from './AnswersList/AnswersList';

const ActiveQuiz = props => {
  return (
    <div className={styles.ActiveQuiz}>
      <p className={styles.Question}>
        <span>
          <strong>1. {props.questionData.question}?</strong>
        </span>
        <small>1 from 4</small>
      </p>
      <AnswersList answers={props.questionData.answers} onAnswerClick={props.onAnswerClick} />
    </div>
  );
};

export default ActiveQuiz;
