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

  handleSearchChange = ({ target }) => {
    this.setState({ ascOrDesc: target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSearch(this.state);
  }


  render() {
    const { search } = this.state;

    return (
      <form className="Search" onSubmit={this.handleSubmit}>

        <input
          name="search"
          value={search}
          onChange={this.handleSearchChange}
        />

        <button>Search</button>

        <select name="ascOrDesc"
          value={ascOrDesc}
          onChange={this.handleSearchChange}>

          <option value="">sort...</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>


        </select>


      </form>
    );
  }

}