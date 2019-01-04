import React, { Component } from "react";
import axios from "axios";

export default class About extends Component {
  constructor() {
    super();
    this.state = {
      task: "",
      title: ""
    };
  }

  componentDidMount() {
    this.createTask();
  }

  createTask = () => {
    axios
      .patch(`https://practiceapi.devmountain.com/api/tasks/2`, {
        completed: false
      })
      .then(
        axios
          .get("https://practiceapi.devmountain.com/api/tasks/", {})
          .then(res => {
            console.log("res.data---------->", res.data);
            this.setState({ task: res.data[0].completed.toString() });
          })
      );
  };

  editTitle = () => {
    axios.put(`https://practiceapi.devmountain.com/api/tasks/2`).then(res => {
      this.setState({ task: res.data[0].completed.toString() });
    });
  };

  render() {
    console.log("---------->", this.state.task);
    return (
      <div>
        About. <h2>match.path:</h2>
        <p>{this.props.match.path}</p>
        <h2>RESTful API put endpoint:</h2>
        <h3>{this.state.task}</h3>
        <button onClick={() => this.editTitle()}>Change to True</button>
      </div>
    );
  }
}
