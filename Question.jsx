
import React, { useContext } from 'react';
import { QuizContext } from './QuizProvider';

const Question = () => {
  const { questions, currentQuestionIndex, handleAnswer } = useContext(QuizContext);
  const question = questions[currentQuestionIndex];

  return (
    <div className="question-container">
      <h2>Question {currentQuestionIndex + 1}:</h2>
      <p>{question.question}</p>
      <div className="options">
        {question.options.map((option, index) => (
          <button key={index} onClick={() => handleAnswer(option)}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
