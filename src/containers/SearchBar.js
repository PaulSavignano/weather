import React, { Component } from 'react'

class SearchBar extends Component {
  constructor(props) {
    super()
    this.state = { term: '' }
    this.onInputChange = this.onInputChange.bind(this)
  }
  onInputChange(e) {
    this.setState({ term: e.target.value })
  }
  onFormSubmit(e) {
    e.preventDefault()
  }
  render() {
    return (
      <form onSubmit={ this.onFormSubmit } className="input-group">
        <input
          placeholder="Get a five-day forecast in your favorite cites"
          className="form-control"
          value={ this.state.term }
          onChange={ this.onInputChange }
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    )
  }
}

export default SearchBar
