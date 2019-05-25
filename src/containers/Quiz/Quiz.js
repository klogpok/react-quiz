import React, { Component } from 'react';
import styles from './Quiz.module.css';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';

export default class Quiz extends Component {
  state = {
    quiz: [
      {
        question: 'Question 1',
        rightAnswerId: 2,
        answers: [
          { id: 1, text: 'Answer 1' },
          { id: 2, text: 'Answer 2' },
          { id: 3, text: 'Answer 3' },
          { id: 4, text: 'Answer 4' },
        ],
      },
    ],
  };

  onAnswerClickHandler = answerId => {
    console.log(answerId);
  };

  render() {
    return (
      <div className={styles.Quiz}>
        <div className={styles.quizWrapper}>
          <h1>Answer to the questions</h1>
          <ActiveQuiz
            questionData={{ ...this.state.quiz[0] }}
            onAnswerClick={this.onAnswerClickHandler}
          />
        </div>
      </div>
    );
  }
}
