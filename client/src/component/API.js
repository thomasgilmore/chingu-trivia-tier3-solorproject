import React, { Component } from 'react';
import './api.css';
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
    this.htmlTopicClicked = this.htmlTopicClicked.bind(this);
    this.cssTopicClicked = this.cssTopicClicked.bind(this);
    this.javaScriptTopicClicked = this.javaScriptTopicClicked.bind(this);
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
      let topic1, topic2, topic3;
      for (var j = 0; j < numberOfQuestions; j++) {
        if (apiRespone[j].topic === "html") {
          htmlQuestions.push(apiRespone[j]);
          topic1 = apiRespone[j].topic;
          // console.log("This is working HTML");
        } else if (apiRespone[j].topic === "css") {
          cssQuestions.push(apiRespone[j]);
          topic2 = apiRespone[j].topic;
          // console.log("This is working css");
        } else if (apiRespone[j].topic === "javascript") {
          javaScriptQuestions.push(apiRespone[j]);
          topic3 = apiRespone[j].topic;
          // console.log("This is working javascript");
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
        cssQuestions,
        topic1,
        topic2,
        topic3
       });
      // this.state.apiRespone.forEach(res => {
      //   console.log(res.question);
      // });
    })
    // .then(res => this.setState({ reapiRespone }))
    // console.log(this.state.apiRespone);
  }
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
        htmlTopicClicked, cssTopicClicked, javaScriptTopicClicked, questionNumber, count, numberOfQuestions, firstQuestion, answer, choiceA, choiceB, choiceC, choiceD, numberOfCorrectAnswers
      })
  }
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
      htmlTopicClicked, cssTopicClicked, javaScriptTopicClicked, questionNumber, count, numberOfQuestions, firstQuestion, answer, choiceA, choiceB, choiceC, choiceD, numberOfCorrectAnswers
    })
}
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
    htmlTopicClicked, cssTopicClicked, javaScriptTopicClicked, questionNumber, count, numberOfQuestions, firstQuestion, answer, choiceA, choiceB, choiceC, choiceD, numberOfCorrectAnswers
  })
}
  choiceAClicked() {
    if (this.state.questionNumber === this.state.numberOfQuestions) {
      if(this.state.answer === "a") {
        let newNumberOfCorrectAnswers = this.state.numberOfCorrectAnswers + 1;
        let message = 'Well Done! Correct! You got ' +  newNumberOfCorrectAnswers + ' Correct Answers!';
        let choiceAorBorCorDClicked = true;
        this.setState({
          answerMessage: message,
          showAnswerMessage: true,
          numberOfCorrectAnswers: newNumberOfCorrectAnswers,
          choiceAorBorCorDClicked
        })
        this.render()
      } else {
        let message = 'Sorry... Wrong Choice. You got '  +  this.state.numberOfCorrectAnswers + ' Correct Answers!';
        let choiceAorBorCorDClicked = true;
        this.setState({
          answerMessage: message,
          showAnswerMessage: true,
          choiceAorBorCorDClicked
        })
        this.render()
      }
    } else {
    if(this.state.answer === "a") {
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
      this.render()
    } else {
      let message = 'Sorry... Wrong Choice.';
      let choiceAorBorCorDClicked = true;
      this.setState({
        showNextButton: true,
        answerMessage: message,
        showAnswerMessage: true,
        choiceAorBorCorDClicked
      })
      this.render()
    }
  }
  }
  choiceBClicked() {
    if (this.state.questionNumber === this.state.numberOfQuestions) {
      if(this.state.answer === "b") {
        let newNumberOfCorrectAnswers = this.state.numberOfCorrectAnswers + 1;
        let message = 'Well Done! Correct! You got ' + newNumberOfCorrectAnswers + ' Correct Answers!';
        let choiceAorBorCorDClicked = true;
        this.setState({
          answerMessage: message,
          showAnswerMessage: true,
          numberOfCorrectAnswers: newNumberOfCorrectAnswers,
          choiceAorBorCorDClicked
        })
        this.render()
      } else {
        let message = 'Sorry... Wrong Choice. You got '  +  this.state.numberOfCorrectAnswers + ' Correct Answers!';
        let choiceAorBorCorDClicked = true;
        this.setState({
          answerMessage: message,
          showAnswerMessage: true,
          choiceAorBorCorDClicked
        })
        this.render()
      }
    } else {
    if(this.state.answer === "b") {
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
      this.render()
    } else {
      let message = 'Sorry... Wrong Choice.';
      let choiceAorBorCorDClicked = true;
      this.setState({
        showNextButton: true,
        answerMessage: message,
        showAnswerMessage: true,
        choiceAorBorCorDClicked
      })
      this.render()
    }
  }
  }
  choiceCClicked() {
    if (this.state.questionNumber === this.state.numberOfQuestions) {
      if(this.state.answer === "c") {
        let newNumberOfCorrectAnswers = this.state.numberOfCorrectAnswers + 1;
        let message = 'Well Done! Correct! You got ' + newNumberOfCorrectAnswers + ' Correct Answers!';
        let choiceAorBorCorDClicked = true;
        this.setState({
          answerMessage: message,
          showAnswerMessage: true,
          numberOfCorrectAnswers: newNumberOfCorrectAnswers,
          choiceAorBorCorDClicked
        })
        this.render()
      } else {
        let message = 'Sorry... Wrong Choice. You got '  +  this.state.numberOfCorrectAnswers + ' Correct Answers!';
        let choiceAorBorCorDClicked = true;
        this.setState({
          answerMessage: message,
          showAnswerMessage: true,
          choiceAorBorCorDClicked
        })
        this.render()
      }
    } else {
    if(this.state.answer === "c") {
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
      this.render()
    } else {
      let message = 'Sorry... Wrong Choice.';
      let choiceAorBorCorDClicked = true;
      this.setState({
        showNextButton: true,
        answerMessage: message,
        showAnswerMessage: true,
        choiceAorBorCorDClicked
      })
      this.render()
    }
  }
  }
  choiceDClicked() {
    if (this.state.questionNumber === this.state.numberOfQuestions) {
      if(this.state.answer === "d") {
        let newNumberOfCorrectAnswers = this.state.numberOfCorrectAnswers + 1;
        let message = 'Well Done! Correct! You got ' + newNumberOfCorrectAnswers + ' Correct Answers!';
        let choiceAorBorCorDClicked = true;
        this.setState({
          answerMessage: message,
          showAnswerMessage: true,
          numberOfCorrectAnswers: newNumberOfCorrectAnswers,
          choiceAorBorCorDClicked
        })
        this.render()
      } else {
        let message = 'Sorry... Wrong Choice. You got '  +  this.state.numberOfCorrectAnswers + ' Correct Answers!';
        let choiceAorBorCorDClicked = true;
        this.setState({
          answerMessage: message,
          showAnswerMessage: true,
          choiceAorBorCorDClicked
        })
        this.render()
      }
    } else {
    if(this.state.answer === "d") {
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
      this.render()
    } else {
      let message = 'Sorry... Wrong Choice.';
      let choiceAorBorCorDClicked = true;
      this.setState({
        showNextButton: true,
        answerMessage: message,
        showAnswerMessage: true,
        choiceAorBorCorDClicked
      })
      this.render()
    }
  }
  }
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
      this.render()
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
      this.render()
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
      this.render()
    }
    
  }
  componentDidMount() {
    window.addEventListener('load', this.callAPI);
  }
  render() {
  return (
    <section>
    {this.state.htmlTopicClicked === false && this.state.cssTopicClicked === false && this.state.javaScriptTopicClicked === false 
      ? <div>
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
    </section>
  );
}
}

export default API;
