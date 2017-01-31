import React, { Component } from 'react';
import imageMap from '../../imageMap';

export default class tableCard extends Component {

	constructor(props) {
		super(props);
		console.log("props: ", props);
	}

	render() {
		console.log(this.props.cardData.smallImage);
		return (
			<img src={this.props.cardData.smallImage} role="presentation" />
		);
	}
}