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
    if (this.props.currentChannel.name !== prevProps.currentChannel.name) {
      this.loadMessages();
    }
  }

  loadMessages = () => {
    if (this.props.currentChannel && this.props.currentChannel.name) {
      return fetchChannelMessages(this.props.currentChannel.name).then(
        messages => this.setState({ messages: messages })
      );
      }
  };

  render() {
    return (
      <React.Fragment>
        {this.state.messages.map((message, i) => {
          // currently just mapping first 10 messages for a quicker fetch
          if (i <= 20) {
            return (
              <div key={message._id} className="message">
               <Message message={message} />
             </div>
            );
          }
        })}
      </React.Fragment>
    );
  }
}
export default Messages;
