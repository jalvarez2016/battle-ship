import React, { Component } from 'react';
import Ship from "./ship.jsx";

class ShipContainer extends Component {
  render() {
    let styles= {
      width: "20%",
      hieght: "inherit",
      border: "1px solid",
      padding: "10px"
    };
    return (
      <div style={styles}>
        <h1>Ship components</h1>
        <Ship length={5} orientation={"horizontal"}/>
        <Ship length={5} orientation={"horizontal"}/>
        <Ship length={3} orientation={"vertical"}/>
        <Ship length={3} orientation={"horizontal"}/>
        <Ship length={2} orientation={"vertical"}/>
      </div>

    );
  }
}

export default ShipContainer;