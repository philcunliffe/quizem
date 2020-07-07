import React from 'react';
import './QuestionCard.css';

function QuestionCard(props) {
  const optionButtons = props.options.map(option =>
    <a href="#" className="btn btn-primary" key={option} onClick={props.handleAnswer.bind(null, option)}>{option}</a>
  );

  return (
    <div className="card">
      <div className="question-image-container card-img-top">
        <img src={`./images/${props.info.image}`} alt="..."/>
      </div>
      <div className="card-body">
        <h3 className="card-title">What is this?</h3>
        { optionButtons }
      </div>
    </div>
  );
}

export default QuestionCard;