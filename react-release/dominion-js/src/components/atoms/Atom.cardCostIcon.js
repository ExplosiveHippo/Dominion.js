import React, { Component } from 'react';
import imageMap from '../../imageMap';

import '../../scss/App.scss';

export default class cardCostIcon extends Component {

	render() {
		return (
			<div className="cardCostIcon">
				<p>{this.props.cost}</p>
				<img src={imageMap.other.coinBg} role="presentation" />
			</div>
		);
	}

}