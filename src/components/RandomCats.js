import React, { Component } from 'react';
import CatsService from './CatsService';

export default class RandomCats extends Component {

  state = {
    images: []
  }

  componentDidMount() {
    this.getRandomCats();
  }

  async getRandomCats() {
    const images = await CatsService.fetchCats(100);
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