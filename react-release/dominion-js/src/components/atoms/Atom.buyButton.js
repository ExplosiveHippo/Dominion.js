import React, { Component } from 'react';
import imageMap from '../../imageMap';

import '../../scss/App.scss';

export default class buyButton extends Component {

	maybeRenderBuyButton(){
		if(this.props.canBuy){
			return(
				<img src={imageMap.other.buyBtn} role="presentation" />
			)
		}
		
	}

	render() {
		return (
			<div className="buyButton">
				{this.maybeRenderBuyButton()}
			</div>
		);
	}
	
}