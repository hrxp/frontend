import React from "react";
import { fetchChannelMessages } from "../../utils/fetcher";
import Message from "../Message/Message";

class Messages extends React.Component {
  constructor({ props }) {
    super(props);
    this.state = {
      messages: [],
      loadingStatus: "INITIAL",
    };
  }

  componentDidMount() {
    return this.loadMessages();
  }

  componentDidUpdate(prevProps) {
    if (this.props.currentChannel.name !== prevProps.currentChannel.name) {
      this.loadMessages();
    }
  }

  loadMessages = () => {
    if (this.props.currentChannel && this.props.currentChannel.name) {
      this.setState({ loadingStatus: "LOADING" });
      return fetchChannelMessages(this.props.currentChannel.name)
        .then(messages => {
          return this.setState({
            loadingStatus: "SUCCESS",
            messages: messages,
          });
        })
        .catch(e => {
          console.error(e);
          this.setState({ loadingStatus: "ERROR" });
        });
    }
  };

  render() {
    if (this.state.loadingStatus === "SUCCESS") {
      return (
        <div className="messages">
          {this.state.messages &&
            this.state.messages.map((message, i) => {
              // currently just mapping first 10 messages for a quicker fetch
              if (i <= 100) {
                return (
                  <div key={message._id} className="message">
                    <Message message={message} />
                  </div>
                );
              }
            })}
        </div>
      );
    } else if (this.state.loadingStatus === "LOADING") {
      return (
        <div className="messages--loading">
          <div className="lds-dual-ring" />
        </div>
      );
    } else if (this.state.loadingStatus === "ERROR") {
      return (
        <div className="messages--error">
          <p>We encountered an error while trying to load these messages.</p>
        </div>
      );
    }

    return null;
  }
}
export default Messages;
