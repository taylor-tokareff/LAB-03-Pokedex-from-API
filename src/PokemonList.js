import React, { Component } from 'react';
import PokemonItem from './PokemonItem.js';

export default class PokemonList extends Component {

  render() {

    const pokemon = this.props.pokemon;

    return (
      <ul className="PokemonList">
        {pokemon.map(pokemon => (
          <PokemonItem key={pokemon.name} pokemon={pokemon} />
        ))}
      </ul>
    );
  }
}
