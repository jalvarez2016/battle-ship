import React, { Component } from 'react';
import GameBox from "./gamebox.jsx";

class GameRow extends Component {
  render() {
    let styles= {
      width: "320px",
      height: "30px",
      border: "1px solid",
    };
    return (
      <div style={styles}>
        <GameBox/>
        <GameBox/>
        <GameBox/>
        <GameBox/>
        <GameBox/>
        <GameBox/>
        <GameBox/>
        <GameBox/>
        <GameBox/>
        <GameBox/>
      </div>

    );
  }
}

export default GameRow;