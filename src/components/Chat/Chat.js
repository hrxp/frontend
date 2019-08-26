import React, { Component } from 'react';
import { fetchChannelMessages } from '../../utils/fetcher';
import { throwStatement } from '@babel/types';

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: ['messege 1', 'message 2'],
      headerExpanded: false,
    }
  }

  componentDidMount() {
    let messages = [];
    fetchChannelMessages(this.props.currentChannel.id).then(data => {
      messages.forEach(message => messages.push(message));
    }).then(() => this.setState({ messages: messages }));
  }

  expandHeaderTopic() {
    if (this.props.currentChannel.topic.length > 60) {
      this.setState({
        headerExpanded: !this.state.headerExpanded
      })
    }
  }

  render() {
    let topicDisplay = '';
    if (this.state.headerExpanded === false && this.props.currentChannel.topic.length > 60) {
      topicDisplay = this.props.currentChannel.topic.slice(0, 60) + '...'
    } else {
      topicDisplay = this.props.currentChannel.topic;
    }

    return (
      <div className="chat">
        <div className="chat__header">
          <h1 className="chat__header__title">#{this.props.currentChannel.name}</h1>

          <p onClick={this.expandHeaderTopic.bind(this)} className="chat__header__topic">
            {topicDisplay}
          </p>
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
