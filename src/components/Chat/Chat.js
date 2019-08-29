import React, { Component } from 'react';
import { fetchChannelMessages } from '../../utils/fetcher';
import { throwStatement } from '@babel/types';
import Messages from '../Messages/Messages'

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headerExpanded: false,
    }

  componentDidMount() {
    fetchChannelMessages(this.props.currentChannel.name).then(messages =>
      this.setState({ messages: messages })
    );
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
          <Messages currentChannel={this.props.currentChannel}/>
        </div>
      </div>
    )
  }
}
export default Chat;
