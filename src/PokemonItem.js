import React, { Component } from 'react';

export default class pokemonItem extends Component {
  render() {

    const pokemon = this.props.pokemon;

    return (
      <div>

        <h1>{pokemon.pokebase}</h1>
        <img src={pokemon.url_image} alt={pokemon.title} />
        <p>{pokemon.type_1}</p>
        <p>{pokemon.shape}</p>
        <p>{pokemon.ability_1}</p>


      </div>
    );
  }
}
