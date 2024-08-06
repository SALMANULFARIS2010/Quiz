
import React, { useContext } from 'react';
import { QuizContext } from './QuizProvider';
import Question from './Question';
import Result from './Result';

const Quiz = () => {
  const {
    timer,
    showResult,
    handleAnswer,
    handleNextQuestion,
    handlePlayAgain,
    isQuizFinished,
    score,
    totalScore
  } = useContext(QuizContext);

  return (
    <div className="quiz-container">
      {!isQuizFinished ? (
        <>
          <div className="timer">Time left: {timer}s</div>
          {showResult ? (
            <Result />
          ) : (
            <Question />
          )}
          {showResult && !isQuizFinished && (
            <button className="play-again-button" onClick={handleNextQuestion}>
              Next Question
            </button>
          )}
        </>
      ) : (
        <div className="result-container">
          <h2>Final Score: {score} / {totalScore}</h2>
          <button className="play-again-button" onClick={handlePlayAgain}>
            Play Again
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;

