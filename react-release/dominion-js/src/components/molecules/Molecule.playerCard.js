import React, { Component } from 'react';

import imageMap from '../../imageMap';
import AtomplayButton from '../atoms/Atom.playButton'

export default class playerCard extends Component {

  render() {
    return (
    	<div className="playerCard">
			<img src={imageMap.large[this.props.cardData.name]} role="presentation" />
			<AtomplayButton />
		</div>
	);
  }

}