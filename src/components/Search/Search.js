import React from 'react';
import axios from 'axios';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }
  }

  handleChange(e) {
    let word = e.target.value;
    this.setState({ input: word });
    
  }

  render() {
    return (
      <div className="searchbar">
        <input
          type="text"
          className="searchbarinput"
          placeholder="search..."
          onChange={this.handleChange}
        />
      </div>
    )
  }
}