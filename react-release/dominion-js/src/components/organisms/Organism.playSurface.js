import React, { Component } from 'react';
import MoleculeTableCard from '../molecules/Molecule.tableCard';
import MoleculePlayerCard from '../molecules/Molecule.playerCard';
import '../../scss/App.scss';

export default class playSurface extends Component {
	constructor(props) {
		super(props);
		this.state = {
			cards: this.props.cards
		};
	}

	componentWillMount(){
		this.shuffleCards();
	}

	shuffleCards(){
		console.log("shuffleCards");
		let cards = this.state.cards;
		console.log(cards);
		for (var i = cards.length - 1; i > 0; i--) {
			var j = Math.floor(Math.random() * (i + 1));
			var temp = cards[i];
			cards[i] = cards[j];
			cards[j] = temp;
		}
		return cards;
	}

	renderCards(card, index){

		// Dominion is played with only 10 table cards
		if(index <= 9){
			console.log(index);
			return(
				<MoleculeTableCard cardData={card} key={index}/>
			)
		}
	}

	render() {
		return (
			<div className="playSurface">
				{this.state.cards.map(this.renderCards)}
			</div>
		);
	}
}