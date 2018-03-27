import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class SingleCreature extends Component {
  state = {
    creature: []
  };

  async componentWillMount() {
    const creatureId = this.props.match.params.creatureId;
    const response = await axios.get(`/${creatureId}`);
    const creature = response.data;
    this.setState({ creature });
  }

  render() {
    return (
      <div>
        <Link to="/">Creature List</Link>
        <h1>This page belongs to {this.state.creature.name}</h1>
        <p>Description: {this.state.creature.description}</p>
      </div>
    );
  }
}

export default SingleCreature;