import React, { Component } from 'react';
import imageMap from '../../imageMap';

import '../../scss/App.scss';

export default class buyButton extends Component {
	
	maybeRenderPlayButton(){
		if(this.props.canPlay){
			return(
				<img src={imageMap.other.playBtn} role="presentation"/>
			)
		}
	}

	render() {
		return (
			<div className="playButton">
				{this.maybeRenderPlayButton()}
			</div>
		);
	}
}