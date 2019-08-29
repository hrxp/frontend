import React from "react";
import { fetchChannels } from "../../utils/fetcher";
import tempChannels from '../../utils/tempChannels';

class Channels extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      channels: [],
    };
  }

  componentDidMount() {
    let channels = [...tempChannels];
    this.setState({ channels: channels });

    if (!this.props.currentChannel) {
      this.props.changeChannel(channels[0]);
    }
    // let channels = [];
    // fetchChannels()
    //   .then(data => {
    //     data.forEach(channel => channels.push(channel.name));
    //   })
    //   .then(() => this.setState({ channels: channels }));
  }



  render() {
    return (
      <div className="channels">
        <h3 className="channels__header">Channels</h3>
        <div className="channels__list">
          {this.state.channels.map(channel => (
            <button
              key={channel._id}
              className={`channels__portal ${
                this.props.currentChannel === channel
                  ? "channels__portal--focus"
                  : ""
                }`}
              onClick={() => this.props.changeChannel(channel)}
              value={channel.name}
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
