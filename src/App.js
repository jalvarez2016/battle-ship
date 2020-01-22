import React from 'react';
import logo from './logo.svg';
import PlayerTurn from "./playerTurn.jsx";
import GameContainer from "./gameContainer";
import './App.css';

function App() {
  return (
    <div className="App">
      <PlayerTurn/>
      <GameContainer/>
    </div>
  );
}

export default App;
