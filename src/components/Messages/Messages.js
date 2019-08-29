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
    if (this.props.channel !== prevProps.channel) {
      this.loadMessages();
    }
  }

  loadMessages = async () => {
    let messages = [];

    // const res = await fetchChannelMessages(this.props.channel);
    // console.log('res: ', res);

    const res = await fetchChannelMessages(this.props.channel);
    // console.log('res: ', res);
    await res.forEach(message => messages.push(message));
    this.setState({ messages: [...messages] });
    // .then(data => {
    //   data.forEach(message => messages.push(message));
    // })
    // .then(() => this.setState({ messages: messages }));

    // console.log('res: ', res);
    // tempMsgs.forEach(msg => {
    //   if (msg.channelName === this.props.channel) {
    //     messages.push(msg);
    //   }
    // })


    // return this.setState({ messages: messages });
    // return fetchChannelMessages(this.props.channel)
    //   .then(data => {
    //     data.forEach(message => messages.push(message));
    //   })
    //   .then(() => this.setState({ messages: messages }));
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
            if (i <= 20) {
              return <Message message={message} />;
            }
          })}
        </div>
      </div>
    );
  }
}
export default Messages;
