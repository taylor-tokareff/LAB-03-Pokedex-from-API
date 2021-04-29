import { Component } from 'react';
import './App.css';
import React from 'react';
import Header from './Header.js';
import request from 'superagent';
import PokemonList from './PokemonList.js';


const POKEMON_API_URL = 'https://pokedex-alchemy.herokuapp.com/api/pokedex';

class App extends Component {
  state = {
    pokemon: []
  }

  async componentDidMount() {
    const response = await request.get(POKEMON_API_URL);
    this.setState({ pokemon: response.body });
  }

  render() {

    const { pokemon } = this.state;

    return (
      <div className="App">

        <Header />



      </div>
    );
  }

}

export default App;
