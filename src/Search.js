import { Component } from 'react';
import './Search.css';

export default class Search extends Component {
  state = {
    search: '',
    ascOrDesc: ''
  }

  handleSearchChange = ({ target }) => {
    this.setState({ search: target.value });
  }

  handleDirectionChange = ({ target }) => {
    this.setState({ ascOrDesc: target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSearch(this.state);
  }


  render() {
    const { search, ascOrDesc } = this.state;
    console.log(search);
    return (
      <form className="Search" onSubmit={this.handleSubmit}>

        <input
          name="search"
          value={search}
          onChange={this.handleSearchChange}
        />



        <select name="ascOrDesc"
          value={ascOrDesc}
          onChange={this.handleDirectionChange}>

          <option value="">sort...</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>


        </select>


        <button>Search</button>
      </form>
    );
  }

}