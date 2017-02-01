import React, { Component } from 'react';
import MoleculeTableCard from '../molecules/Molecule.tableCard';
import MoleculePlayerCard from '../molecules/Molecule.playerCard';
import '../../scss/App.scss';

export default class playerHand extends Component {
	constructor(props) {
		super(props);
	}

	componentWillMount(){
		this.shuffleCards();
	}

	shuffleCards(){
		let playerHand = this.props.cards;
		for (var i = playerHand.length - 1; i > 0; i--) {
			var j = Math.floor(Math.random() * (i + 1));
			var temp = playerHand[i];
			playerHand[i] = playerHand[j];
			playerHand[j] = temp;
		}
		return playerHand;
	}

	renderPlayerCards(card, index){
		// player hand is limited to 5 cards
		if(index <= 4){
			return(
				<MoleculePlayerCard cardData={card} key={index}/>
			)
		}
	}

	render() {
		return (
			<div className="playerHand">
				{this.props.cards.map(this.renderPlayerCards)}
			</div>
		);
	}
}