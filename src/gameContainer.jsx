import React, { Component } from 'react';
import ShipContainer from "./shipContainer";
import GameBoard from "./GameBoard.jsx";

class GameContainer extends Component {
  render() {
    return (
        <div>
            <ShipContainer/>
            <GameBoard/>
        </div>
    );
  }
}

export default GameContainer;