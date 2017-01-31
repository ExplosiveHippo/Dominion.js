import React, { Component } from 'react';
import OrganismCard from '../organisms/Organism.card';
import cardJSON from '../../cardData';

export default class BoardTable extends Component {

	constructor() {
		super();
		this.state = {

		};
		console.log(cardJSON);
	}

	render() {
		return (
			<OrganismCard />
		);
	}
}