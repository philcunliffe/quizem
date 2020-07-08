import React from 'react';
import './App.css';
import Quiz from './components/Quiz';
import { berries, pnwBerryTitles } from './quiz-constants/pnw-berries';

function App() {
  return (
    <div className="App">
      <Quiz cards={berries} titles={pnwBerryTitles}></Quiz>
    </div>
  );
}

export default App;
