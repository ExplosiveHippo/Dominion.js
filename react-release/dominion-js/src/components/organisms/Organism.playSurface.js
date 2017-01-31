import React, { Component } from 'react';
import MoleculeTableCard from '../molecules/Molecule.tableCard';
import '../../scss/App.scss';

export default class playSurface extends Component {
	constructor(props) {
		super(props);
		this.state = {
			cards: this.props.cards
		};
	}

	renderCards(card, index){
		return(
			<MoleculeTableCard cardData={card} key={index}/>
		)
	}

	render() {
		return (
			<div className="playSurface">
				{this.state.cards.map(this.renderCards)}
			</div>
		);
	}
}