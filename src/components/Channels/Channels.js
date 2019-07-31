import React from "react";
import { fetchChannels } from "../../utils/fetcher";
import Messages from "../Messages/Messages";

class Channels extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      channels: [],
      currentChannel: "General",
      error: null
    };
  }

  componentDidMount() {
    let data = fetchChannels();
    this.setState({ channels: data, currentChannel: "General" });
  }

  handleClick = e => {
    e.preventDefault();
    this.setState({ currentChannel: e });
  };

  render() {
    return (
      <div>
        <h1>{this.state.currentChannel}</h1>
        <div>
          {this.state.channels.map(channel => {
            return <button onClick={this.handleClick} />;
          })}
        </div>

        <Messages currentChannel={this.state.currentChannel} />
      </div>
    );
  }
}

export default Channels;
