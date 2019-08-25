import React, { Component } from 'react';
import { fetchChannelMessages } from '../../utils/fetcher';

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: ['messege 1', 'message 2']
    }
  }

  componentDidMount() {
    let messages = [];
    fetchChannelMessages('testChannel2').then(data => {
      messages.forEach(message => messages.push(message));
    }).then(() => this.setState({ messages: messages }));
  }

  render() {
    return (
      <div className="chat">
        <div className="chat__header">
          <h1 className="chat__header__title">#{this.props.currentChannel.name}</h1>
          <p className="chat__header__topic">
            {this.props.currentChannel.topic.substring(0, 60) + ' ...'}
          </p>
          <p className="chat__header__full-topic">{this.props.currentChannel.topic}</p>
        </div>
        <div className="messages">
          {
            this.state.messages.map(message => {
              return <div>{message}</div>;
            })
          }
        </div>
      </div>
    )
  }
}
export default Chat;
