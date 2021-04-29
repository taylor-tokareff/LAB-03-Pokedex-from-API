import React, { Component } from 'react';

export default class pokemonItem extends Component {
  render() {

    const { pokemon } = this.props;

    return (
      <li className='PokemonItem'>

        <h1>{pokemon.pokebase}</h1>
        <img src={pokemon.url_image} alt={pokemon.pokebase} />
        <p>{pokemon.type_1}</p>
        <p>{pokemon.shape}</p>
        <p>{pokemon.ability_1}</p>


      </li>
    );
  }
}
