import React, { Component } from "react";
import axios from "axios";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      ricksName: "",
      ricksSpecies: "",
      ricksStatus: ""
    };
  }

  componentDidMount() {
    this.getRicksFullName();
  }

  getRicksFullName = () => {
    axios
      .get("https://rickandmortyapi.com/api/character/?name=rick&status=alive")
      .then(rick => {
        console.log(rick.data.results[0]);
        this.setState({
          ricksName: rick.data.results[0].name,
          ricksSpecies: rick.data.results[0].species,
          ricksStatus: rick.data.results[0].status
        });
      });
  };

  render() {
    console.log("match---------->", this.props.match);
    return (
      <div>
        Home. <h2>match.path:</h2>
        <p>{this.props.match.path}</p>
        <div>
          <h2>RESTful API query:</h2>
          <h3>Name: {this.state.ricksName}</h3>
          <h3>Species: {this.state.ricksSpecies}</h3>
          <h3>Status: {this.state.ricksStatus}</h3>
        </div>
      </div>
    );
  }
}
