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
      count: 0
    };
    this.callAPI = this.callAPI.bind(this)
  }

  callAPI() {
    fetch("http://localhost:3100/api")
    .then(res => res.json())
    .then(res => {
      let apiRespone = res.data;
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
        choiceD
       });
      // this.state.apiRespone.forEach(res => {
      //   console.log(res.question);
      // });
    })
    // .then(res => this.setState({ reapiRespone }))
    // console.log(this.state.apiRespone);
  }
  componentDidMount() {
    window.addEventListener('load', this.callAPI);
 }
  render() {
  return (
    <div>
      <div>Question {this.state.questionNumber} / {this.state.apiRespone.length - 1}</div>
      <div>{this.state.question}</div>
      <button>{this.state.choiceA}</button>
      <button>{this.state.choiceB}</button>
      <button>{this.state.choiceC}</button>
      <button>{this.state.choiceD}</button>
    </div>
  );
}
}

export default API;
