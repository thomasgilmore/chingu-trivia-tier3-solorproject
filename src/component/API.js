import React, { Component } from 'react';
import './api.css';
import Nav from './Nav';
import QuestionCard from './QuestionCard';

class API extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiRespone: '',
      products: '',
      htmlQuestions: [],
      javaScriptQuestions: [],
      cssQuestions: [],
      questionNumber: 1,
      question: '',
      choiceA: '',
      choiceB: '',
      choiceC: '',
      choiceD: '',
      answer: '',
      count: 0,
      numberOfQuestions: 0,
      showNextButton: false,
      answerMessage: '',
      showAnswerMessage: false,
      topic1: '',
      topic2: '',
      topic3: '',
      htmlTopicClicked: false,
      cssTopicClicked: false,
      javaScriptTopicClicked: false,
      numberOfCorrectAnswers: 0,
      choiceAorBorCorDClicked: false
    };
    this.callAPI = this.callAPI.bind(this);
    this.navItemClick = this.navItemClick.bind(this);
    this.htmlTopicClicked = this.htmlTopicClicked.bind(this);
    this.cssTopicClicked = this.cssTopicClicked.bind(this);
    this.javaScriptTopicClicked = this.javaScriptTopicClicked.bind(this);
    this.correctChoiceLastQuestion = this.correctChoiceLastQuestion.bind(this);
    this.wrongChoiceLastQuestion = this.wrongChoiceLastQuestion.bind(this);
    this.correctChoice = this.correctChoice.bind(this);
    this.wrongChoice = this.wrongChoice.bind(this);
    this.choiceAClicked = this.choiceAClicked.bind(this);
    this.choiceBClicked = this.choiceBClicked.bind(this);
    this.choiceCClicked = this.choiceCClicked.bind(this);
    this.choiceDClicked = this.choiceDClicked.bind(this);
    this.nextQuestionClicked = this.nextQuestionClicked.bind(this);
  }

  // callAPI if fetching the server api fetch and making it viewable on the Front End
  callAPI() {
    let url = window.location.protocol + '//' + window.location.host + '/api';
    fetch(url)
    .then(res => res.json())
    .then(res => {
      let apiRespone = res.data;
      let numberOfQuestions = apiRespone.length;
      let firstQuestion = apiRespone[0].question;
      let answer = apiRespone[0].answer;
      let choiceA = apiRespone[0].choices.a;
      let choiceB = apiRespone[0].choices.b;
      let choiceC = apiRespone[0].choices.c;
      let choiceD = apiRespone[0].choices.d;
      let htmlQuestions = [];
      let javaScriptQuestions = [];
      let cssQuestions = [];
      let topic1, topic2, topic3;
      for (var j = 0; j < numberOfQuestions; j++) {
        if (apiRespone[j].topic === "html") {
          // If the topic of the question is html the questions go into the array htmlQuestions
          htmlQuestions.push(apiRespone[j]);
          topic1 = apiRespone[j].topic;
        } else if (apiRespone[j].topic === "css") {
          // If the topic of the question is css the questions go into the array htmlQuestions
          cssQuestions.push(apiRespone[j]);
          topic2 = apiRespone[j].topic;
        } else if (apiRespone[j].topic === "javascript") {
          // If the topic of the question is javascript the questions go into the array htmlQuestions
          javaScriptQuestions.push(apiRespone[j]);
          topic3 = apiRespone[j].topic;
        }
      }
      this.setState({ 
        apiRespone,
        question: firstQuestion,
        answer,
        choiceA,
        choiceB,
        choiceC,
        choiceD,
        numberOfQuestions,
        htmlQuestions,
        javaScriptQuestions,
        cssQuestions,
        topic1,
        topic2,
        topic3
       });
    });
  }

  // Once one of the Nav items are clicked it makes the values false to display the topic buttons again and not the questions.
  navItemClick() {
    let htmlTopicClicked = false;
    let cssTopicClicked = false;
    let javaScriptTopicClicked = false;
    this.setState({ htmlTopicClicked, cssTopicClicked, javaScriptTopicClicked })
  }

  // html topic button starts and displays html questions 
  htmlTopicClicked() {
    let htmlTopicClicked = true;
    let cssTopicClicked = false;
    let javaScriptTopicClicked = false;
    let questionNumber = 1;
    let count = 0;
    let numberOfQuestions = this.state.htmlQuestions.length;
    let firstQuestion = this.state.htmlQuestions[0].question;
    let answer = this.state.htmlQuestions[0].answer;
    let choiceA = this.state.htmlQuestions[0].choices.a;
    let choiceB = this.state.htmlQuestions[0].choices.b;
    let choiceC = this.state.htmlQuestions[0].choices.c;
    let choiceD = this.state.htmlQuestions[0].choices.d;
    let numberOfCorrectAnswers = 0;
    this.setState({
      htmlTopicClicked, cssTopicClicked, javaScriptTopicClicked, 
      questionNumber, count, numberOfQuestions, firstQuestion,
      answer, choiceA, choiceB, choiceC, choiceD, numberOfCorrectAnswers
    })
  }

  // css topic button starts and displays css questions 
  cssTopicClicked() {
    let htmlTopicClicked = false;
    let cssTopicClicked = true;
    let javaScriptTopicClicked = false;
    let questionNumber = 1;
    let count = 0;
    let numberOfQuestions = this.state.cssQuestions.length;
    let firstQuestion = this.state.cssQuestions[0].question;
    let answer = this.state.cssQuestions[0].answer;
    let choiceA = this.state.cssQuestions[0].choices.a;
    let choiceB = this.state.cssQuestions[0].choices.b;
    let choiceC = this.state.cssQuestions[0].choices.c;
    let choiceD = this.state.cssQuestions[0].choices.d;
    let numberOfCorrectAnswers = 0;
    this.setState({
      htmlTopicClicked, cssTopicClicked, javaScriptTopicClicked, 
      questionNumber, count, numberOfQuestions, firstQuestion,
      answer, choiceA, choiceB, choiceC, choiceD, numberOfCorrectAnswers
    })
  }

  // javascript topic button starts and displays javascript questions 
  javaScriptTopicClicked() {
    let htmlTopicClicked = false;
    let cssTopicClicked = false;
    let javaScriptTopicClicked = true;
    let questionNumber = 1;
    let count = 0;
    let numberOfQuestions = this.state.javaScriptQuestions.length;
    let firstQuestion = this.state.javaScriptQuestions[0].question;
    let answer = this.state.javaScriptQuestions[0].answer;
    let choiceA = this.state.javaScriptQuestions[0].choices.a;
    let choiceB = this.state.javaScriptQuestions[0].choices.b;
    let choiceC = this.state.javaScriptQuestions[0].choices.c;
    let choiceD = this.state.javaScriptQuestions[0].choices.d;
    let numberOfCorrectAnswers = 0;
    this.setState({
      htmlTopicClicked, cssTopicClicked, javaScriptTopicClicked, 
      questionNumber, count, numberOfQuestions, firstQuestion, 
      answer, choiceA, choiceB, choiceC, choiceD, numberOfCorrectAnswers
    })
  }

  // correct choice clicked of last question 
  correctChoiceLastQuestion() {
    let newNumberOfCorrectAnswers = this.state.numberOfCorrectAnswers + 1;
    let message = 'Well Done! Correct! You got ' +  newNumberOfCorrectAnswers + ' Correct Answers!';
    let choiceAorBorCorDClicked = true;
    this.setState({
      answerMessage: message,
      showAnswerMessage: true,
      numberOfCorrectAnswers: newNumberOfCorrectAnswers,
      choiceAorBorCorDClicked
    })
  }

  // wrong choice clicked of last question 
  wrongChoiceLastQuestion() {
    let message = 'Sorry... Wrong Choice. You got '  +  this.state.numberOfCorrectAnswers + ' Correct Answers!';
        let choiceAorBorCorDClicked = true;
        this.setState({
          answerMessage: message,
          showAnswerMessage: true,
          choiceAorBorCorDClicked
        })
  }

  // correct choice clicked of question
  correctChoice() {
    let message = 'Well Done! Correct!';
      let newNumberOfCorrectAnswers = this.state.numberOfCorrectAnswers + 1;
      let choiceAorBorCorDClicked = true;
      this.setState({
        showNextButton: true,
        answerMessage: message,
        showAnswerMessage: true,
        numberOfCorrectAnswers: newNumberOfCorrectAnswers,
        choiceAorBorCorDClicked
      })
  }

  // wrong choice clicked of question
  wrongChoice() {
    let message = 'Sorry... Wrong Choice.';
      let choiceAorBorCorDClicked = true;
      this.setState({
        showNextButton: true,
        answerMessage: message,
        showAnswerMessage: true,
        choiceAorBorCorDClicked
      })
  }

  // Button of choice A clicked and check if it was the correct answer and also displays message and next button
  choiceAClicked() {
    if (this.state.questionNumber === this.state.numberOfQuestions) {
      if(this.state.answer === "a") {
        this.correctChoiceLastQuestion();
      } else {
        this.wrongChoiceLastQuestion();
      }
    } else {
      if(this.state.answer === "a") {
        this.correctChoice();
      } else {
        this.wrongChoice();
      }
    }
  }

  // Button of choice B clicked and check if it was the correct answer and also displays message and next button
  choiceBClicked() {
    if (this.state.questionNumber === this.state.numberOfQuestions) {
      if(this.state.answer === "b") {
        this.correctChoiceLastQuestion();
      } else {
        this.wrongChoiceLastQuestion();
      }
    } else {
      if(this.state.answer === "b") {
        this.correctChoice();
      } else {
        this.wrongChoice();
      }
    }
  }

  // Button of choice C clicked and check if it was the correct answer and also displays message and next button
  choiceCClicked() {
    if (this.state.questionNumber === this.state.numberOfQuestions) {
      if(this.state.answer === "c") {
        this.correctChoiceLastQuestion();
      } else {
        this.wrongChoiceLastQuestion();
      }
    } else {
      if(this.state.answer === "c") {
        this.correctChoice();
      } else {
        this.wrongChoice();
      }
    }
  }

  // Button of choice D clicked and check if it was the correct answer and also displays message and next button
  choiceDClicked() {
    if (this.state.questionNumber === this.state.numberOfQuestions) {
      if(this.state.answer === "d") {
        this.correctChoiceLastQuestion();
      } else {
        this.wrongChoiceLastQuestion();
      }
    } else {
      if(this.state.answer === "d") {
        this.correctChoice();
      } else {
        this.wrongChoice();
      }
    }
  }

  // next Button Clicked and displays next question in topic
  nextQuestionClicked() {
    if (this.state.htmlTopicClicked === true) {
      let i = this.state.count;
      let newQuestionNumber = this.state.questionNumber + 1;
      i++;
      let question = this.state.htmlQuestions[i].question;
      let answer = this.state.htmlQuestions[i].answer;
      let choiceA = this.state.htmlQuestions[i].choices.a;
      let choiceB = this.state.htmlQuestions[i].choices.b;
      let choiceC = this.state.htmlQuestions[i].choices.c;
      let choiceD = this.state.htmlQuestions[i].choices.d;
      let choiceAorBorCorDClicked = false;
      this.setState({
        question,
        answer,
        choiceA,
        choiceB,
        choiceC,
        choiceD,
        questionNumber: newQuestionNumber,
        count: i,
        showNextButton: false,
        showAnswerMessage: false,
        choiceAorBorCorDClicked
      })
    } else if (this.state.cssTopicClicked === true) {
      let i = this.state.count;
      let newQuestionNumber = this.state.questionNumber + 1;
      i++;
      let question = this.state.cssQuestions[i].question;
      let answer = this.state.cssQuestions[i].answer;
      let choiceA = this.state.cssQuestions[i].choices.a;
      let choiceB = this.state.cssQuestions[i].choices.b;
      let choiceC = this.state.cssQuestions[i].choices.c;
      let choiceD = this.state.cssQuestions[i].choices.d;
      let choiceAorBorCorDClicked = false;
      this.setState({
        question,
        answer,
        choiceA,
        choiceB,
        choiceC,
        choiceD,
        questionNumber: newQuestionNumber,
        count: i,
        showNextButton: false,
        showAnswerMessage: false,
        choiceAorBorCorDClicked
      })
    } else if (this.state.javaScriptTopicClicked === true) {
      let i = this.state.count;
      let newQuestionNumber = this.state.questionNumber + 1;
      i++;
      let question = this.state.javaScriptQuestions[i].question;
      let answer = this.state.javaScriptQuestions[i].answer;
      let choiceA = this.state.javaScriptQuestions[i].choices.a;
      let choiceB = this.state.javaScriptQuestions[i].choices.b;
      let choiceC = this.state.javaScriptQuestions[i].choices.c;
      let choiceD = this.state.javaScriptQuestions[i].choices.d;
      let choiceAorBorCorDClicked = false;
      this.setState({
        question,
        answer,
        choiceA,
        choiceB,
        choiceC,
        choiceD,
        questionNumber: newQuestionNumber,
        count: i,
        showNextButton: false,
        showAnswerMessage: false,
        choiceAorBorCorDClicked
      })
    }  
  }

  // on page load it will run the function callAPI to fetch the questions
  componentDidMount() {
    window.addEventListener('load', this.callAPI);
  }
  
  render() {
  return (
    <div>
    <Nav onClick={this.navItemClick} />
    <div className="container">
    {/* Display either the Topic Buttons or the Questions for that Topic */}
    {this.state.htmlTopicClicked === false && this.state.cssTopicClicked === false && this.state.javaScriptTopicClicked === false 
      ? <div className="topicButtonDiv">
      <button className="topicButton" onClick={this.htmlTopicClicked}>{this.state.topic1}</button>
      <button className="topicButton" onClick={this.cssTopicClicked}>{this.state.topic2}</button>
      <button  className="topicButton" onClick={this.javaScriptTopicClicked}>{this.state.topic3}</button>
    </div> :
      <QuestionCard 
        count={this.state.count}
        nextQuestionNumber={this.state.newQuestionNumber}
        apiRespone={this.state.apiRespone}
        questionNumber={this.state.questionNumber}
        numberOfQuestions={this.state.numberOfQuestions}
        choiceA={this.state.choiceA}
        choiceB={this.state.choiceB}
        choiceC={this.state.choiceC}
        choiceD={this.state.choiceD}
        showAnswerMessage={this.state.showAnswerMessage}
        showNextButton={this.state.showNextButton}
        answerMessage={this.state.answerMessage}
        answer={this.state.answer}
        question={this.state.question}
        choiceAClicked={this.choiceAClicked}
        choiceBClicked={this.choiceBClicked}
        choiceCClicked={this.choiceCClicked}
        choiceDClicked={this.choiceDClicked}
        nextQuestionClicked={this.nextQuestionClicked}
        choiceAorBorCorDClicked={this.state.choiceAorBorCorDClicked}
      /> 
    }
    </div>
    </div>
  );
}
}

export default API;
