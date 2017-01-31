import React, { Component } from 'react';
import OrganismCard from '../organisms/Organism.card';

export default class BoardTable extends Component {
	constructor(props){
		super(props);
		this.state = {

		};
	}

	render() {
		return (
			<OrganismCard />
		);
	}
}