import React, { Component } from 'react';

class API extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiRespone: '',
      products: '',
      questionNumber: 1,
      question: '',
      choiceA: '',
      choiceB: '',
      choiceC: '',
      choiceD: '',
      answer: '',
      count: 0,
      numberOfQuestions: 0,
    };
    this.callAPI = this.callAPI.bind(this);
    this.choiceAClicked = this.choiceAClicked.bind(this);
  }

  callAPI() {
    fetch("http://localhost:3100/api")
    .then(res => res.json())
    .then(res => {
      let apiRespone = res.data;
      let numberOfQuestions = apiRespone.length - 1;
      let firstQuestion = apiRespone[0].question;
      let answer = apiRespone[0].answer;
      let choiceA = apiRespone[0].choices.a;
      let choiceB = apiRespone[0].choices.b;
      let choiceC = apiRespone[0].choices.c;
      let choiceD = apiRespone[0].choices.d;
      console.log(apiRespone);
      this.setState({ 
        apiRespone,
        question: firstQuestion,
        answer,
        choiceA,
        choiceB,
        choiceC,
        choiceD,
        numberOfQuestions
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
        count: i
      })
      this.render()
    } else {
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
        count: i
      })
      this.render()
    }
  }
  componentDidMount() {
    window.addEventListener('load', this.callAPI);
  }
  render() {
  return (
    <div>
      <div>Question {this.state.questionNumber} / {this.state.numberOfQuestions}</div>
      <div>{this.state.question}</div>
      <button onClick={this.choiceAClicked}>{this.state.choiceA}</button>
      <button>{this.state.choiceB}</button>
      {this.state.choiceC === undefined ? <div> </div> : <div><button>{this.state.choiceC}</button>
      <button>{this.state.choiceD}</button></div>}
    </div>
  );
}
}

export default API;
