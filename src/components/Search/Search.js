import React from 'react';
import axios from 'axios';
import SearchBox from './SearchBox.js';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      channelID: props.channelID,
      menu: 'Messages',
      openSearchBox: false,
      searched: [],
      hasMore: true
    }

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(e) {
    let word = e.target.value;
    axios
      .get(`/search`, {
        params: {
          word: word,
        }
      })
      .then(res => {
        this.setState({
          searched: [...this.state.searched, ...res.data],
          input: word
        })
      })
      .catch(err => {
        console.error(err);
      })
  }

  openSearchBox() {
    this.setState({ openSearchBox: true })
  }

  render() {
    let searchBox;
    if (this.state.openSearchBox) {
      searchBox = <SearchBox 
                    handleSearch={this.handleSearch}
                    menu={this.state.menu}
                    hasMore={this.state.hasMore}
                    searched={this.state.searched}
                  />
    } else {
      searchBox = '';
    }
    return (
      <div className="searchbar">
        <button id="searchbutton" onClick={this.openSearchBox}/>
        {searchBox}
      </div>
    )
  }
}

export default Search;