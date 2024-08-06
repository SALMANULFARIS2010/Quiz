
import React, { useContext } from 'react';
import { QuizContext } from './QuizProvider';

const Result = () => {
  const { score } = useContext(QuizContext);

  return (
    <div className="result-container">
      <h2>Your Score: {score}</h2>
    </div>
  );
};

export default Result;
