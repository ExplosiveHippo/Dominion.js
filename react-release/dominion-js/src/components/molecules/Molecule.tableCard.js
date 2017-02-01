import React, { Component } from 'react';
import imageMap from '../../imageMap';

export default class tableCard extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="tableCard">
				<img src={imageMap.small[this.props.cardData.name]} role="presentation" />
			</div>
		);
	}
}