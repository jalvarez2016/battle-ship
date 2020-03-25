import React, { Component } from 'react';

class GameBox extends Component {
  constructor(props){
    super(props);
    this.state = {
      active: false
    }
    this.shoot = this.shoot.bind(this);
  }

  shoot(){
    console.log("hi");
    this.setState({
      active: true
    });
  }

  render() {
    
    let styles= {
      width: "30px",
      height: "30px",
      border: "1px solid",
      color: "white",
      float: 'left'
    };
    
    if(this.state.active) {
      styles= {
        width: "30px",
        height: "30px",
        backgroundColor: "red",
        border: "1px solid",
        float: "left"
      }
    };

    return (
      <div style={styles} onClick={() => this.shoot()}>
      </div>

    );
  }
}

export default GameBox;