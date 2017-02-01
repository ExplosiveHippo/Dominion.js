import React, { Component } from 'react';
import MoleculeTableCard from '../molecules/Molecule.tableCard';
import MoleculePlayerCard from '../molecules/Molecule.playerCard';
import imageMap from '../../imageMap';

import '../../scss/App.scss';

export default class playerHand extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="cardCostIcon">
				<p>0</p>
				<img src={imageMap.other.coinBg} />
			</div>
		);
	}
}