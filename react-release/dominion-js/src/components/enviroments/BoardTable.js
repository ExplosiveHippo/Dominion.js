import React, { Component } from 'react';
import OrganismPlaySurface from '../organisms/Organism.playSurface';
import OrganismPlayerHand from '../organisms/Organism.playerHand';
import cardJSON from '../../cardData';

export default class BoardTable extends Component {

	constructor() {
		super();
		this.state = {
			gameCards: cardJSON,
			playerHand: []
		};
	}

	componentWillMount(){
		this.setupPlayerHand();
	}

	// Set up starting hand for player, of 4 coppers and 3 estates
	setupPlayerHand(){
		let initialPlayerHand = [];

		for(let i = 0; i <= 3; i++){
			initialPlayerHand.push(this.state.gameCards.money[0]);
		}

		for(let i = 0; i <= 2; i++){
			initialPlayerHand.push(this.state.gameCards.victory[0]);
		}

		this.setState({playerHand: initialPlayerHand})
		
	}

	render() {
		console.log(this.state.playerHand);
		return (
			<div>
				<OrganismPlaySurface cards={this.state.gameCards} />
				<OrganismPlayerHand cards={this.state.playerHand} />
			</div>
		);
	}
}