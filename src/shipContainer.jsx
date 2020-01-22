import React, { Component } from 'react';
import Ship from "./ship.jsx";

class ShipContainer extends Component {
  render() {
    return (
      <div>
        <h1>Ship components</h1>
        <Ship length={5} orientation={"horizontal"}/>
        <Ship length={5}/>
        <Ship length={3}/>
        <Ship length={3}/>
        <Ship length={2}/>
      </div>

    );
  }
}

export default ShipContainer;