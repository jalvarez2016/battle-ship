import React, { Component } from 'react';

class GameBox extends Component {
  render() {
    let styles= {
      width: "30px",
      height: "30px",
      border: "1px solid",
      float: 'left'
    };
    return (
      <div style={styles}>
      </div>

    );
  }
}

export default GameBox;