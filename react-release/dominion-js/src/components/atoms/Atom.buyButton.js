import React, { Component } from 'react';
import imageMap from '../../imageMap';

import '../../scss/App.scss';

export default class buyButton extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="buyButton">
				<img src={imageMap.other.buyBtn} />
			</div>
		);
	}
}