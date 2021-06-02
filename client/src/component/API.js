import React, { Component } from 'react';

class API extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiRespone: '',
      products: ''
    };
    this.callAPI = this.callAPI.bind(this)
  }

  callAPI() {
    fetch("http://localhost:3100/api")
    .then(res => res.json())
    .then(res => {
      console.log(res);
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
        API
    </div>
  );
}
}

export default API;
