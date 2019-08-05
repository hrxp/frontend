import React from 'react';
import { fetchChannels } from '../../utils/fetcher';
import Messages from '../Messages/Messages';

class Channels extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      channels: ['general', 'hrxp-_general', 'hrxp-ui', 'random'],
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
      <div className="channels">
        <h3 className="channels--header">Channels</h3>
        <div className="channels--list">
          {this.state.channels.map(channel => (
            <button className="channels--portal" onClick={this.handleClick} value={channel}>
              {`# ${channel}`}
            </button>
          ))}
        </div>
      </div>
    );
  }
}

export default Channels;
