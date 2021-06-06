import React from 'react';
import './questioncard.css';

function QuestionCard(props) {
  return (
    <div className="questionCard">
      <div>Question {props.questionNumber} / {props.numberOfQuestions}</div>
      <h2 className="question">{props.question}</h2>
      <button onClick={props.choiceAClicked} className="choiceButton">{props.choiceA}</button>
      <button onClick={props.choiceBClicked} className="choiceButton">{props.choiceB}</button>
      {props.choiceC === undefined ? <div> </div> : <div><button onClick={props.choiceCClicked} className="choiceButton">{props.choiceC}</button>
      <button onClick={props.choiceDClicked} className="choiceButton">{props.choiceD}</button></div>}
      {props.showAnswerMessage === false ? <div> </div> : <h4 className="answerMessage">{props.answerMessage}</h4>}
      {props.showNextButton === false ? <div> </div> : <div><button onClick={props.nextQuestionClicked} className="nextButton">NEXT</button></div>}
    </div>
  )
}

export default QuestionCard

