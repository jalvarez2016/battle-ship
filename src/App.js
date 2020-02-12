import React from 'react';
import logo from './logo.svg';
import PlayerTurn from "./playerTurn.jsx";
import GameContainer from "./gameContainer";
import './App.css';
// import * as firebase from "firebase/app";


// firebase.initializeApp({
//   databaseURL: 'https://react-firebase-sandbox.firebaseio.com'
// })

function App() {
  return (
    <div className="App">
      <PlayerTurn/>
      <GameContainer/>
    </div>
  );
}

export default App;
