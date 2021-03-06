import React, { Component } from 'react';
import MoleculeTableCard from '../molecules/Molecule.tableCard';
import MoleculePlayerTracker from '../molecules/Molecule.playerTracker';
import '../../scss/App.scss';

export default class playSurface extends Component {
	constructor(props) {
		super(props);

		this.state = {
			actionCards: this.props.cards.actions,
			moneyCards: this.props.cards.money,
			victoryCards: this.props.cards.victory
		};

		this.renderActionCards = this.renderActionCards.bind(this);
		this.renderMoneyCards = this.renderMoneyCards.bind(this);
		this.renderVictoryCards = this.renderVictoryCards.bind(this);
	}

	componentWillMount(){
		// This is setup for the play surface, which starts with getting random action cards
		this.shuffleCards();
	}

	shuffleCards(){
		let actionCards = this.props.cards.actions;
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
			return(
				<MoleculeTableCard cardData={card} handWorth={this.props.handWorth} key={index}/>
			)
		}
	}

	renderMoneyCards(card, index){
		return(
			<MoleculeTableCard cardData={card} handWorth={this.props.handWorth} key={index} />
		)
	}

	renderVictoryCards(card, index){
		return(
			<MoleculeTableCard cardData={card} handWorth={this.props.handWorth} key={index} />
		)
	}

	renderPlayerTracker(){
		return(
			<MoleculePlayerTracker handWorth={this.props.handWorth} />
		)
	}

	render() {
		return (
			<div className="playSurface">
				{this.props.cards.actions.map(this.renderActionCards)}
				{this.props.cards.money.map(this.renderMoneyCards)}
				{this.props.cards.victory.map(this.renderVictoryCards)}
				{this.renderPlayerTracker()}
			</div>
		);
	}
}