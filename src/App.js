import React from 'react';
import logo from './logo.svg';
import PlayerTurn from "./playerTurn.jsx";
import GameContainer from "./gameContainer";
import Hash from "./Hash.jsx";
import './App.css';

function App() {
  return (
    <div className="App">
      <PlayerTurn/>
      <GameContainer/>
      <Hash/>
    </div>
  );
}

export default App;
