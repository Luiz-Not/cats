import React, { Component } from 'react';
import CatsService from './CatsService';

export default class SpaceCats extends Component {
  componentDidMount() {
    this.getHatCats();
  }

  state = {
    images: []
  }

  async getHatCats() {
    const images = await CatsService.fetchCats(50, 'space');
    this.setState({ images });
  }

  render() {
    const { images } = this.state;
    return (
      <div>
        <ul>
          {images.map((image, id) => {
            return <li key={id}><img src={image.textContent} /></li>
          })}
        </ul>
      </div>
    );
  }
}