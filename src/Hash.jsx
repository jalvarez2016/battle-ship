import React, { Component } from 'react';
class Hash extends Component {
  render() {
    return (
        <button onClick= {()=>{
            let r = Math.random().toString(36).substring(7);
console.log("Hash", r);#'hashGoesHereM8'.append(r);}}>Click to win free things</button>
<h1 id= "hashGoesHereM8">|Game ID|:</h1>
    );
  }
}

export default Hash;[]