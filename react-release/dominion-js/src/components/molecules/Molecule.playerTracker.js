import React, { Component } from 'react';

export default class playerTracker extends Component {

  render() {
    return (
    	<div className="playerTracker">
			<p>Actions: {this.props.handWorth.actions}</p>
			<p>Buys: {this.props.handWorth.buys}</p>
			<p>Treasure: {this.props.handWorth.treasure}</p>
		</div>
	);
  }

}