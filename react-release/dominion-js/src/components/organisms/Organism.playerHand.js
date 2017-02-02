import React, { Component } from 'react';
import MoleculePlayerCard from '../molecules/Molecule.playerCard';
import '../../scss/App.scss';

export default class playerHand extends Component {
	constructor(props) {
		super(props);
		this.state = {
			actions: 0,
			buys: 0,
			treasure: 0
		};
	}

	componentWillMount(){
		//this.calculateHand();
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
	console.log(this.state);
		return (
			<div className="playerHand">
				{this.props.cards.map(this.renderPlayerCards)}
			</div>
		);
	}
}