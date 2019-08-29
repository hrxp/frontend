import React from 'react';
import SearchBox from './SearchBox.js';
import { fetchChannels, fetchChannelMessages } from "../../utils/fetcher"
import axios from 'axios';
class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      menu: 'Messages',
      searched: [],
      hasMore: true
    }

    // this.handleSearch = this.handleSearch.bind(this);
  }


  componentDidMount() {
    this.onKeyDown = e => {
      const input = document.getElementById('search');
      if (input !== document.activeElement) {
        input.value = '';
        input.focus();
      }
      if (e.keyCode === 13) {
        this.handleSearch();
      }
    };

    window.addEventListener('keydown', this.onKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onKeyDown);
  }


  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({ input: e.target.value });
  };

  async search(channelName) {
    if (!this.searchTerm) return;
    const channels = await this.fetch('/search/' + this.input + (channelName ? '?channel=' + channelName : ''));
    channels.forEach(c => c.type = 'search');
    this.scrollPos = 0;
    this.display = channels;
  }

  async fetch(url, isText) {
    this.isLoading = true;

    try {
      const res = await fetch(url).then(n => isText ? n.text() : n.json());
      this.isLoading = false;
      return res;

    } catch (e) {
      this.isLoading = false;
      this.alert(e.message);
      throw e;
    }
  }

  handleSearch = (e) => {
    let word = this.state.input;

    const fetchChannels = () => {
      return axios
        .get(`${process.env.REACT_APP_API_BASE_URL}/channels`)
        .then(response => {
          console.log('success');
          return response.data;
        })
        .catch(error => {
          console.log(error, "Fetch channels failed!");
        });
    };

    const fetchChannelMessages = channelName => {
      return axios
        .get(
          `${process.env.REACT_APP_API_BASE_URL}/channels/${channelName}/messages`
        )
        .then(response => {
          console.log(response, "Fetch messages success!");
          return response.data;
        })
        .catch(error => {
          console.log(error, "Fetch messages failed!");
        });
    };


    // axios
    //   .get(`/search`, {
    //     params: {
    //       word: word,
    //     }
    //   })
    //   .then(res => {
    //     this.setState({
    //       searched: [...this.state.searched, ...res.data],
    //       // input: word
    //     })
    //   })
    //   .catch(err => {
    //     console.error(err);
    //   })
    fetchChannels();
  }

  // openSearchBox() {
  // this.setState({ openSearchBox: true })
  // }

  render() {
    let searchBox;
    // if (this.state.openSearchBox) {
    //   searchBox = <SearchBox
    //     handleSearch={this.handleSearch}
    //     menu={this.state.menu}
    //     hasMore={this.state.hasMore}
    //     searched={this.state.searched}
    //   />
    // } else {
    //   searchBox = '';
    // }
    return (
      <div className="searchbar">
        {/* <button id="searchbutton" onClick={this.openSearchBox} /> */}
        <SearchBox
          handleChange={this.handleChange}
          handleSearch={this.handleSearch}
          menu={this.state.menu}
          hasMore={this.state.hasMore}
          searched={this.state.searched}

        />
      </div>
    )
  }
}

export default Search;