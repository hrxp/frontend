import React, { Component } from 'react';
import { fetchChannels } from '../../utils/fetcher';

class Channels extends Component {
  constructor(props) {
    super(props);
    this.state = {
      channels: [],
      error: null
    };
  }

  componentDidMount() {
    let channels = [];
    fetchChannels().then(data => {
      let dataFirstTen = data.slice(0, 10);
      dataFirstTen.forEach(channel => channels.push(channel));
    }).then(() => {
        this.setState({ channels: channels });
        this.props.changeChannel(channels[0])
      }
    )
  }

  render() {
    return (
      <div className="channels">
        <h3 className="channels__header">Channels</h3>
        <div className="channels__list">
          {!this.props.currentChannel || this.state.channels.map(channel => (
            <button 
              key={channel} 
              className={`channels__portal ${this.props.currentChannel.name === channel.name ? 'channels__portal--focus' : ''}`} 
              onClick={() => this.props.changeChannel(channel)} value={channel.name}
            >
              {`# ${channel.name}`}
            </button>
          ))}
        </div>
      </div>
    );
  }
}

export default Channels;
