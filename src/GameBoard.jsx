import React, { Component } from 'react';
import GameRow from "./gamerow.jsx";

class GameBoard extends Component {
  render() {
    let styles={
      float: "left",
      border: "1px solid",
      padding: "10px",
      width: "75%"
    }
    return (
      <div style={styles}>
        <h1>Game board components</h1>
        <GameRow/>
        <GameRow/>
        <GameRow/>
        <GameRow/>
        <GameRow/>
        <GameRow/>
        <GameRow/>
        <GameRow/>
        <GameRow/>
        <GameRow/>
      </div>
    );
  }
}

export default GameBoard;