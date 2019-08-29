import React from "react";
import { fetchChannels } from "../../utils/fetcher";
import tempChannels from '../../utils/tempChannels';

class Channels extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      channels: ["general", "random", "whos-hiring"],
      error: null
    };
  }

  async componentDidMount() {
    let results = [];
    let channels = await fetchChannels();
    channels.forEach(channel => {
      results.push(channel.name);
    })

    return this.setState({ channels: [...results] });
  }

  render() {
    return (
      <div className="channels">
        <h3 className="channels__header">Channels</h3>
        <div className="channels__list">
          {this.state.channels.map(channel => (
            <button
              key={channel}
              className={`channels__portal ${
                this.props.currentChannel === channel
                  ? "channels__portal--focus"
                  : ""
                }`}
              onClick={() => this.props.changeChannel(channel)}
              value={channel}
            >
              {`# ${channel}`}
            </button>
          ))}
        </div>
      </div>
    );
  }
}

export default Channels;
