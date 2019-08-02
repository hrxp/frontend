import React from 'react';
import { fetchChannels } from '../../utils/fetcher';
import Messages from '../Messages/Messages';

class Channels extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      channels: ['test', 'test2'],
      currentChannel: 'general',
      error: null
    };
  }

  componentDidMount() {
    let channels = [];
    fetchChannels()
      .then(data => {
        data.forEach(channel => channels.push(channel.topic));
      })
      .then(() => this.setState({ channels: channels }));
  }

  handleClick = e => {
    e.preventDefault();
    this.setState({ currentChannel: e.target.value });
  };

  render() {
    return (
      <div>
        <div>
          {this.state.channels.map(channel => (
            <button onClick={this.handleClick} value={channel}>
              {channel}
            </button>
          ))}
        </div>
        <Messages currentChannel={this.state.currentChannel} />
      </div>
    );
  }
}

export default Channels;
