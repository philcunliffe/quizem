import React from 'react';
import './AnswerCard.css';

function AnswerCard(props) {
  const otherNamesText = props.info.otherNames.reduce((agg, otherName, index) => {
    let toReturn = agg;
    if (index) {
      // Not the first item
      toReturn = toReturn + ', '
    }
    return (toReturn + otherName);
  }, '');
  const bulletPoints = props.info.bullets.map(bullet => (
    <li className={bullet.isWarning ? 'warning' : ''}>{bullet.text}</li>
  ));
  const carouselItems = props.info.images.map((imageHref, index) => (
    <div className={imageHref === props.info.image ? 'carousel-item active' : 'carousel-item'} data-interval="15000">
      <img src={`./images/${imageHref}`}/>
    </div>
  ));
  
  return (
    <div className="card">
      <div id="carouselControls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          {carouselItems}
        </div>
        <a className="carousel-control-prev" href="#carouselControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      {/* <img src={`./images/${props.info.image}`} className="card-img-top" alt="..."/> */}
      <div className="card-body">
      { props.correct ? 
        <div className="alert alert-success">Correct! Nice job.</div>
        : 
        <div className="alert alert-danger">Incorrect, better luck next time</div> 
      }
        <div className="card-title">
          <h5>{props.info.name}</h5>
          {
            !!otherNamesText ? <h6>{otherNamesText}</h6> : ''
          }
          <a className="wiki-link" href={props.info.wikiLink.href} target="_blank">{props.info.wikiLink.text}</a>
        </div>
        <ul className="card-text">{bulletPoints}</ul>
        <a href="#" className="btn btn-primary" onClick={props.handleNext}>Next</a>
      </div>
    </div>
  );
}

export default AnswerCard;