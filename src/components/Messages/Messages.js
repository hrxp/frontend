import React from "react";
import { fetchChannelMessages, fetchChannels } from "../../utils/fetcher";
import Message from "../Message/Message";
import tempMsgs from '../../utils/tempMsgs';

class Messages extends React.Component {
  constructor({ props }) {
    super(props);
    this.state = {
      messages: []
    };
  }

  async componentDidMount() {
    return this.loadMessages();

  }

  componentDidUpdate(prevProps) {
    if (this.props.currentChannel.name !== prevProps.currentChannel.name) {
      this.loadMessages();
    }
  }

  loadMessages = async () => {
    let messages = [];
    tempMsgs.forEach(msg => {
      if (msg.channelName === this.props.currentChannel.name) {
        messages.push(msg);
      }
    })
    return this.setState({ messages: messages });
    // return fetchChannelMessages(this.props.channel)
    //   .then(data => {
    //     data.forEach(message => messages.push(message));
    //   })
    //   .then(() => this.setState({ messages: messages }));
  };

  render() {
    return (
      <React.Fragment>
        {this.state.messages.map((message, i) => {
          // currently just mapping first 10 messages for a quicker fetch
          if (i <= 20) {
            return (
             <div key={message.createdBy._id} className='message'> 
               <Message message={message} />
             </div>
            )
          }
        })}
      </React.Fragment>
    );
  }
}
export default Messages;
