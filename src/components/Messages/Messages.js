import React from "react";
import { fetchChannelMessages } from "../../utils/fetcher";
import Message from "../Message/Message";

class Messages extends React.Component {
  constructor({ props }) {
    super(props);
    this.state = {
      messages: []
    };
  }

  componentDidMount() {
    return this.loadMessages();
  }

  componentDidUpdate(prevProps) {
    if (this.props.channel !== prevProps.channel) {
      this.loadMessages();
    }
  }

  loadMessages = () => {
    let messages = [];
    return fetchChannelMessages(this.props.channel)
      .then(data => {
        data.forEach(message => messages.push(message));
      })
      .then(() => this.setState({ messages: messages }));
  };

  render() {
    return (
      <div className="chat">
        <div className="chat__header">
          <h1>#{this.props.channel}</h1>
        </div>
        <div className="messages">
          {this.state.messages.map((message, i) => {
            // currently just mapping first 10 messages for a quicker fetch
            if (i <= 10) {
              return <Message message={message} />;
            }
          })}
        </div>
      </div>
    );
  }
}
export default Messages;
