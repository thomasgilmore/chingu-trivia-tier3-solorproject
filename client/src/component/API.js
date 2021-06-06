import React, { Component } from 'react';
// import './api.css';
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
      showAnswerMessage: false
    };
    this.callAPI = this.callAPI.bind(this);
    this.choiceAClicked = this.choiceAClicked.bind(this);
    this.choiceBClicked = this.choiceBClicked.bind(this);
    this.choiceCClicked = this.choiceCClicked.bind(this);
    this.choiceDClicked = this.choiceDClicked.bind(this);
    this.nextQuestionClicked = this.nextQuestionClicked.bind(this);
  }

  callAPI() {
    fetch("http://localhost:3100/api")
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
      for (var j = 0; j < numberOfQuestions; j++) {
        if (apiRespone[j].topic === "html") {
          htmlQuestions.push(apiRespone[j]);
          // console.log("This is working HTML");
        } else if (apiRespone[j].topic === "javascript") {
          javaScriptQuestions.push(apiRespone[j]);
          // console.log("This is working javascript");
        } else if (apiRespone[j].topic === "css") {
          cssQuestions.push(apiRespone[j]);
          // console.log("This is working css");
        }
      }
      // console.log(apiRespone);
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
        cssQuestions
       });
      // this.state.apiRespone.forEach(res => {
      //   console.log(res.question);
      // });
    })
    // .then(res => this.setState({ reapiRespone }))
    // console.log(this.state.apiRespone);
  }
  choiceAClicked() {
    if(this.state.answer === "a") {
      let message = 'Well Done! Correct!';
      this.setState({
        showNextButton: true,
        answerMessage: message,
        showAnswerMessage: true
      })
      this.render()
    } else {
      let message = 'Sorry... Wrong Choice.';
      this.setState({
        showNextButton: true,
        answerMessage: message,
        showAnswerMessage: true
      })
      this.render()
    }
  }
  choiceBClicked() {
    if(this.state.answer === "b") {
      let message = 'Well Done! Correct!';
      this.setState({
        showNextButton: true,
        answerMessage: message,
        showAnswerMessage: true
      })
      this.render()
    } else {
      let message = 'Sorry... Wrong Choice.';
      this.setState({
        showNextButton: true,
        answerMessage: message,
        showAnswerMessage: true
      })
      this.render()
    }
  }
  choiceCClicked() {
    if(this.state.answer === "c") {
      let message = 'Well Done! Correct!';
      this.setState({
        showNextButton: true,
        answerMessage: message,
        showAnswerMessage: true
      })
      this.render()
    } else {
      let message = 'Sorry... Wrong Choice.';
      this.setState({
        showNextButton: true,
        answerMessage: message,
        showAnswerMessage: true
      })
      this.render()
    }
  }
  choiceDClicked() {
    if(this.state.answer === "d") {
      let message = 'Well Done! Correct!';
      this.setState({
        showNextButton: true,
        answerMessage: message,
        showAnswerMessage: true
      })
      this.render()
    } else {
      let message = 'Sorry... Wrong Choice.';
      this.setState({
        showNextButton: true,
        answerMessage: message,
        showAnswerMessage: true
      })
      this.render()
    }
  }
  nextQuestionClicked() {
    let i = this.state.count;
      let newQuestionNumber = this.state.questionNumber + 1;
      i++;
      let question = this.state.apiRespone[i].question;
      let answer = this.state.apiRespone[i].answer;
      let choiceA = this.state.apiRespone[i].choices.a;
      let choiceB = this.state.apiRespone[i].choices.b;
      let choiceC = this.state.apiRespone[i].choices.c;
      let choiceD = this.state.apiRespone[i].choices.d;
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
        showAnswerMessage: false
      })
      this.render()
  }
  componentDidMount() {
    window.addEventListener('load', this.callAPI);
  }
  render() {
  return (
    <section>
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
    />
    </section>
  );
}
}

export default API;
