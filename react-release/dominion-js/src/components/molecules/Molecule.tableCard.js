import React, { Component } from 'react';
import imageMap from '../../imageMap';
import AtomCardCostIcon from '../atoms/Atom.cardCostIcon'
import AtombuyButton from '../atoms/Atom.buyButton'

export default class tableCard extends Component {

	render() {
		return (
			<div className="tableCard">
				<img src={imageMap.small[this.props.cardData.name]} role="presentation" />
				<AtomCardCostIcon cost={this.props.cardData.cost}/>
				<AtombuyButton />
			</div>
		);
	}

}