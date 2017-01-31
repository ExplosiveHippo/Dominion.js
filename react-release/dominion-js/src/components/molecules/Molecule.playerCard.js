import React, { Component } from 'react';

import imageMap from '../../imageMap';

export default class playerCard extends Component {
  render() {
    return (
      <img src={imageMap.bazaar} />
    );
  }
}