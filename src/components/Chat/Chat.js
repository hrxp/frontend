import React, { Component } from 'react';
import { fetchChannelMessages } from '../../utils/fetcher';

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: ['mesage 1', 'awdoijawdji']
    }
  }
  // let messages = fetchChannelMessages(); // TODO: API server needs to add messages in data model
  componentDidMount() {
    let messages = [];
    // console.log(this.props.currentChannel.id)
    fetchChannelMessages('testChannel2').then(data => {
      console.log(data);
      // dataFirstTen.forEach(channel => messages.push(channel));
    }).then(() => this.setState({ messages: messages }));
  }

  render() {
    return (
      <div className="chat">
        <div className="chat__header">
          <h1>#{this.props.currentChannel.name}</h1>
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
