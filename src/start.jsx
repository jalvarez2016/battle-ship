import React, {Component} from 'react';
import PlayerTurn from "./playerTurn.jsx";
import GameContainer from "./gameContainer";

class StartScreen extends Component {
  constructor(){
    super(props);
    this.state = {
      started: true,
    }
  }

    newRoom(){
        console.log("Making new room");

    }

    joinRoom( hash ){
        console.log("Joining room. Hash is:" + hash);

    }

    render() {
      let styles= {
          backgroundColor: "green",
          width: "100%",
          height: "100%",
      };

      if(this.state.started){
        return (
          <div className="App">
            <PlayerTurn/>
            <GameContainer/>
          </div>
        );

      } else {
        return (
            <div style={styles}>
            <button>New Room</button>
            <button>Join Room</button>
            </div>
    
        );
      }
    }
  }
  
  export default StartScreen;