import React, { Component } from 'react';
import { createStore } from 'redux';
import OrganismPlaySurface from '../organisms/Organism.playSurface';
import OrganismPlayerHand from '../organisms/Organism.playerHand';
import cardJSON from '../../cardData';

export default class BoardTable extends Component {

	constructor() {
		super();
		this.state = {
			gameCards: cardJSON,
			playerDeck: [],
			playerHand: [],
			actions: 0,
			buys: 0,
			treasure: 0
		};
	}

	componentWillMount(){
		//this.setupPlayerHandPromise();

		let initialCards = this.setupPlayerHand();
		let shuffledCards = this.shuffleHand(initialCards);
		let drawnHand = this.drawHand(shuffledCards);
		this.calculateHand(drawnHand);

		this.setState({playerDeck: shuffledCards, playerHand: drawnHand, });
	}

	// Set up starting hand for player, of 4 coppers and 3 estates
	setupPlayerHand(){
		let initialPlayerHand = [];

		for(let i = 0; i <= 3; i++){
			initialPlayerHand.push(this.state.gameCards.money[0]);
			//console.log(initialPlayerHand);
		}

		for(let i = 0; i <= 2; i++){
			initialPlayerHand.push(this.state.gameCards.victory[0]);
		}

		return initialPlayerHand;
		
	}

	shuffleHand(cards){
		for (var i = cards.length - 1; i > 0; i--) {
			var j = Math.floor(Math.random() * (i + 1));
			var temp = cards[i];
			cards[i] = cards[j];
			cards[j] = temp;
		}

		return cards;
	}

	drawHand(cards){
		let playerHand = cards.splice(0, 5);
		return playerHand;
	}

	calculateHand(cards){
		let actions = 0;
		let buys = 0;
		let treasure = 0;

		cards.forEach(function(card,index){
			actions += card.actions;
			buys += card.buys;
			treasure += card.worth;
		});

		this.setState({handWorth: {actions: actions, buys: buys, treasure: treasure} })

	}

	render() {
		console.log(this.state);
		return (
			<div>
				<OrganismPlaySurface cards={this.state.gameCards} handWorth={this.state.handWorth} />
				<OrganismPlayerHand cards={this.state.playerHand} />
			</div>
		);
	}
}