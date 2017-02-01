import React, { Component } from 'react';
import OrganismPlaySurface from '../organisms/Organism.playSurface';
import cardJSON from '../../cardData';

export default class BoardTable extends Component {

	constructor() {
		super();
		this.state = {

		};
	}

	render() {
		return (
			<OrganismPlaySurface cards={cardJSON} />
		);
	}
}