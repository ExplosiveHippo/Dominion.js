import React, { Component } from 'react';
import imageMap from '../../imageMap';

export default class tableCard extends Component {

	constructor(props) {
		super(props);
		console.log("props: ", props);
	}

	render() {
		return (
			<img src={imageMap[this.props.cardData.name]} role="presentation" />
		);
	}
}