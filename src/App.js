import { Component } from 'react';
import './App.css';
import React from 'react';
import Header from './Header.js';
import request, { search } from 'superagent';
import PokemonList from './PokemonList.js';
import Search from './Search';


const POKEMON_API_URL = 'https://pokedex-alchemy.herokuapp.com/api/pokedex';

class App extends Component {
  state = {
    pokebase: [],
    loading: false,
    search: '',
    ascOrDesc: '',
  }

  componentDidMount() {
    this.fetchPokemon();
  }

  async fetchPokemon() {
    const { search,
      ascOrDesc,

    } = this.state;

    this.setState({ loading: true });

    try {
      const response = await request
        .get(POKEMON_API_URL)
        .query({ pokemon: search })
        .query({ sort: 'pokemon' })
        .query({ direction: ascOrDesc });


      this.setState({ pokebase: response.body.results });
      console.log(response.body.results);
    }
    catch (err) {
      console.log(err);
    }
    finally {
      this.setState({ loading: false });
    }
  }

  handleSearch = ({ search }) => {
    this.setState({ search: search }, () =>
      this.fetchPokemon(search));

  }

  handlePrevPage = () => {
    this.setState(
      {
        search: search, page: 1
      },
      () => this.fetchPokemon()
    );
  }



  handleNextPage = () => {
    this.setState(
      // { page: this.state.page + 1 },
      () => this.fetchPokemon()
    );
  }



  render() {

    const { pokebase, loading,
      // page
    } = this.state;

    return (
      <div className="App" >

        <Header />

        <section className="search-options">
          <Search onSearch={this.handleSearch} />
          {/* <Paging
            page={page}
            onPrev={this.handlePrevPage}
            onNext={this.handleNextPage}
          /> */}
        </section>


        <main>
          {pokebase && (pokebase.length
            ? <PokemonList pokemon={pokebase} />
            : <p>Sorry no pokemon :(</p>)
          }

          {loading && <img className="loading" src="loading.gif" alt="loading" />}
        </main>



      </div>
    );
  }

}

export default App;
