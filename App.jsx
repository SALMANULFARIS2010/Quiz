
import React from 'react';
import QuizProvider from './QuizProvider';
import Quiz from './Quiz';
import './App.css';

const App = () => {
  return (
    <QuizProvider>
      <div className="app-container">
        <h1>Quiz App</h1>
        <h2>Total Questions: 10</h2>
        <Quiz />
      </div>
    </QuizProvider>
  );
};

export default App;
