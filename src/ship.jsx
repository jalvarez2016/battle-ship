import React, { Component } from 'react';

class Ship extends Component {
    constructor(props) {
        super(props)
        this.state = {
            health: props.length,
            cord: []
        }
    }

    setCords(cordinates) {
        this.setState({
            health: this.props.length,
            cord: cordinates,
        });
    }
    render() {
        return (
            <div>
                Ship:
        length: {this.props.length}
                health: {this.state.health}
                orientation: {this.props.orientation}
            </div>
        );
    }
}

export default Ship;