import React from 'react';
import { fetchChannels } from '../../utils/fetcher';

class Channels extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      channels: ['general', 'hrxp-_general', 'hrxp-ui', 'random'],
      error: null
    };
  }

  componentDidMount() {
    // let channels = [];
    // fetchChannels().then(data => {
    //   data.forEach(channel => channels.push(channel.topic));
    // }).then(() => this.setState({ channels: channels }));
  }

  render() {
    console.log(this.props.currentChannel)
    return (
      <div className="channels">
        <h3 className="channels__header">Channels</h3>
        <div className="channels__list">
          {this.state.channels.map(channel => (
            <button key={channel} className={`channels__portal ${this.props.currentChannel === channel ? 'channels__portal--focus' : ''}`} onClick={() => this.props.changeChannel(channel)} value={channel}>
              {`# ${channel}`}
            </button>
          ))}
        </div>
      </div>
    );
  }
}

export default Channels;
