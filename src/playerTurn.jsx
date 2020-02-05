import React, { Component, useState } from 'react';

function PlayerTurn (props){

    
      const [ player,setPlayer
      ] =
      useState('player1');
      return (<>
      <h1>{player} Turn</h1>
      <button onClick= {()=>{
        if (player === 'player1'){
        setPlayer ('player2')};
        if (player === 'player2'){
          setPlayer ('player1')
        };
      }}>Click me!</button>
      </>)
}

export default PlayerTurn;