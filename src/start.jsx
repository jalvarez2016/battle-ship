import React, {Component} from 'react';
import PlayerTurn from "./playerTurn.jsx";
import GameContainer from "./gameContainer";
import {database} from "./firebase";
import createRoom from "./createRoom";

class StartScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      started: false,
    }
    // Get a reference to the database service
    this.databaseRef = database.ref('/GameRooms')
    this.databaseRef.once("value").then((data) => {
      const rooms = data.val();
      console.log("rooms", rooms)
    });
  }

    newRoom() {
      this.setState({
        started: true
      })
      createRoom(this.databaseRef);
      console.log("Making new room");

    }

    joinRoom( hash ){
        console.log("Joining room. Hash is:" + hash);

    }

    render() {
      console.log(this.databaseRef);
      let styles= {
          backgroundColor: "green",
          width: "100%",
          height: "100vh",
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
            <button onClick={()=>this.newRoom()}>New Room</button>
            <button onClick={()=>this.joinRoom()}>Join Room</button>
            </div>
    
        );
      }
    }
  }
  
  export default StartScreen;