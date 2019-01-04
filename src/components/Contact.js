import React, { Component } from "react";

export default class Contact extends Component {
  constructor() {
    super();
    this.state = {
      counter: parseInt(sessionStorage.getItem("counter")) || 0
    };
  }

  addToCounter = () => {
    sessionStorage.setItem("counter", this.state.counter + 1);
    this.setState({ counter: parseInt(sessionStorage.getItem("counter")) });
  };

  render() {
    console.log("match---------->", this.props.match);
    return (
      <div>
        Contact.
        <h2>match.path:</h2>
        <p>{this.props.match.path}</p>
        <h2>Store data in sessions</h2>
        <h3>Counter: {this.state.counter}</h3>
        <button onClick={() => this.addToCounter()}>Add to Counter</button>
      </div>
    );
  }
}
