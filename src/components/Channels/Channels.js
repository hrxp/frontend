import React from "react";
import { fetchChannels } from "../../utils/fetcher";

class Channels extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      channels: [],
    };
  }

  componentDidMount() {
    fetchChannels().then(channels =>
      this.setState({
        channels: channels.sort((a, b) => b.members.length - a.members.length),
      })
    );
  }

  render() {
    return (
      <div className="channels">
        <h3 className="channels__header">Channels</h3>
        <div className="channels__list">
          {this.state.channels &&
            this.state.channels.map(channel => (
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
