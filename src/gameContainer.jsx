import React, { Component } from 'react';
import ShipContainer from "./shipContainer";
import GameBoard from "./GameBoard.jsx";

class GameContainer extends Component {
  render() {
    let styles={
      width:"80vw",
      margin:"auto",
      border:"1px solid",
      display: "flex",
      justifyContent: "space-between",
    }
    return (
        <div style={styles}>
            <ShipContainer/>
            <GameBoard/>
        </div>
    );
  }
}

export default GameContainer;