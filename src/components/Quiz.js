import React from 'react';
import './Quiz.css';
import QuestionCard from './QuestionCard';
import AnswerCard from './AnswerCard';

import shuffle from '../utils/shuffle';
import getRandomInt from '../utils/random';

class Quiz extends React.Component {
  cards = shuffle(Quiz.PickPhotos([...this.props.cards]));
  state = {
    score: 0,
    questionNumber: 1,
    showAnswer: false,
    lastWasCorrect: false,
    quizComplete: false,
  };

  get currentCard() {
    return this.cards[this.state.questionNumber - 1];
  }

  static PickPhotos(cards) {
    return cards.map(card => ({ ...card, image: card.images[getRandomInt(card.images.length)] }));
  }

  getOptions = () => {
    const correctAnswer = this.currentCard.name;
    const options = new Array(3)
      .fill(this.cards.length)
      .reduce((optionsArray, cardsLength) => {
        // Generate random answers without repeats or current answer
        let newOptionIndex = getRandomInt(cardsLength);
        while (optionsArray.includes(newOptionIndex) || newOptionIndex === (this.state.questionNumber - 1)) {
          newOptionIndex = getRandomInt(cardsLength);
        }
        return [...optionsArray, newOptionIndex];
      }, [])
      .map(optionIndex => this.cards[optionIndex].name);

    return shuffle([...options, correctAnswer]);
  }

  getBallerStatus = () => {
    const grade = this.state.score / this.cards.length;
    if (grade >= 0.9) {
      return this.props.titles.A;
    } else if (grade >= 0.8) {
      return this.props.titles.B;
    } else if (grade >= 0.7) {
      return this.props.titles.C;
    } else if (grade >= 0.6) {
      return this.props.titles.D;
    }
    return this.props.titles.F;
  }

  handleAnswer = (answer) => {
    // Correct answer?
    const correct = answer === this.currentCard.name;
    const newScore = correct ? this.state.score + 1 : this.state.score;
    this.setState({
      showAnswer: true,
      lastWasCorrect: correct,
      score: newScore,
    });
  }

  handleNext = () => {
    if (this.state.questionNumber === this.cards.length) {
      // End of quiz
      this.setState({
        quizComplete: true,
      });
    } else {
      this.setState({
        showAnswer: false,
        questionNumber: this.state.questionNumber + 1,
      });
    }
  }

  handleRestart = () => {
    this.cards = shuffle(Quiz.PickPhotos([...this.props.cards]));
    this.setState({
      score: 0,
      questionNumber: 1,
      showAnswer: false,
      lastWasCorrect: false,
      quizComplete: false,
    });
  }

  render() {
    if (this.state.quizComplete) {
      return (
        <div className="finish-screen">
          <h1>Final score: {this.state.score} / {this.cards.length}</h1>
          <h2>Youz a {this.getBallerStatus()}</h2>
          <a href="#" className="btn btn-primary" onClick={this.handleRestart}>Restart</a>
        </div>
      )
    }
    return (
      <div className="quiz container">
        {
          !this.state.quizComplete && !this.state.showAnswer ?
            <QuestionCard
              info={this.currentCard}
              options={this.getOptions()}
              handleAnswer={this.handleAnswer}/>
            :
            <AnswerCard
              info={this.currentCard}
              handleNext={this.handleNext}
              correct={this.state.lastWasCorrect}/>
        }
        <div className="score-container">
          <h1>Score: {this.state.score}</h1>
          <h4>Question {this.state.questionNumber} of {this.cards.length}</h4>
        </div>
      </div>
    )
  }
}

export default Quiz;
