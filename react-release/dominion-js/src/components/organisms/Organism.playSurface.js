import React, { Component } from 'react';
import MoleculeTableCard from '../molecules/Molecule.tableCard';
import MoleculePlayerCard from '../molecules/Molecule.playerCard';
import '../../scss/App.scss';

export default class playSurface extends Component {
	constructor(props) {
		super(props);
		this.state = {
			actionCards: this.props.cards.actions,
			moneyCards: this.props.cards.money,
			victoryCards: this.props.cards.victory
		};
	}

	componentWillMount(){
		this.shuffleCards();
	}

	shuffleCards(){
		let actionCards = this.state.actionCards;
		for (var i = actionCards.length - 1; i > 0; i--) {
			var j = Math.floor(Math.random() * (i + 1));
			var temp = actionCards[i];
			actionCards[i] = actionCards[j];
			actionCards[j] = temp;
		}
		return actionCards;
	}

	renderActionCards(card, index){

		// Dominion is played with only 10 table cards
		if(index <= 9){
			console.log(index);
			return(
				<MoleculeTableCard cardData={card} key={index}/>
			)
		}
	}

	renderMoneyCards(card, index){
		return(
			<MoleculeTableCard cardData={card} key={index} />
		)
	}

	renderVictoryCards(card, index){
		return(
			<MoleculeTableCard cardData={card} key={index} />
		)
	}

	render() {
		return (
			<div className="playSurface">
				{this.state.actionCards.map(this.renderActionCards)}
				{this.state.moneyCards.map(this.renderMoneyCards)}
				{this.state.victoryCards.map(this.renderVictoryCards)}
			</div>
		);
	}
}