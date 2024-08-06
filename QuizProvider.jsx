
import React, { createContext, useState, useEffect } from 'react';

export const QuizContext = createContext();

const QuizProvider = ({ children }) => {
  const questions = [
    { question: 'What is the capital of France?', options: ['Berlin', 'Madrid', 'Paris', 'Rome'], answer: 'Paris' },
    { question: 'Which planet is known as the Red Planet?', options: ['Earth', 'Mars', 'Jupiter', 'Venus'], answer: 'Mars' },
    { question: 'Who wrote "Romeo and Juliet"?', options: ['Mark Twain', 'Charles Dickens', 'William Shakespeare', 'Jane Austen'], answer: 'William Shakespeare' },
    { question: 'What is the smallest prime number?', options: ['0', '1', '2', '3'], answer: '2' },
    { question: 'What is the chemical symbol for Gold?', options: ['Au', 'Ag', 'Pb', 'Fe'], answer: 'Au' },
    { question: 'Which gas do plants use for photosynthesis?', options: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Hydrogen'], answer: 'Carbon Dioxide' },
    { question: 'What is the largest mammal in the world?', options: ['African Elephant', 'Blue Whale', 'Giraffe', 'Hippopotamus'], answer: 'Blue Whale' },
    { question: 'Which element has the atomic number 1?', options: ['Helium', 'Oxygen', 'Hydrogen', 'Carbon'], answer: 'Hydrogen' },
    { question: 'Who painted the Mona Lisa?', options: ['Vincent van Gogh', 'Claude Monet', 'Leonardo da Vinci', 'Pablo Picasso'], answer: 'Leonardo da Vinci' },
    { question: 'What is the capital of Japan?', options: ['Seoul', 'Beijing', 'Tokyo', 'Bangkok'], answer: 'Tokyo' }
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(5);
  const [showResult, setShowResult] = useState(false);
  const [isQuizFinished, setIsQuizFinished] = useState(false);

  const totalScore = questions.length;

  useEffect(() => {
    if (isQuizFinished) return;

    if (timer === 0) {
      handleNextQuestion();
    } else if (!showResult) {
      const interval = setInterval(() => {
        setTimer(prev => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer, showResult, isQuizFinished]);

  const handleAnswer = (answer) => {
    if (questions[currentQuestionIndex].answer === answer) {
      setScore(prev => prev + 1);
    }
    setShowResult(true);
    setTimer(5);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setShowResult(false);
      setTimer(5);
    } else {
      setIsQuizFinished(true);
      setShowResult(true); // Show results at the end of the quiz
    }
  };

  const handlePlayAgain = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setTimer(5);
    setShowResult(false);
    setIsQuizFinished(false);
  };

  return (
    <QuizContext.Provider value={{
      questions, currentQuestionIndex, score, timer, showResult,
      handleAnswer, handleNextQuestion, handlePlayAgain, isQuizFinished, totalScore
    }}>
      {children}
    </QuizContext.Provider>
  );
};

export default QuizProvider;
