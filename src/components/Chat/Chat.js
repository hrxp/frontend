import React, { Component } from 'react';
import { fetchChannelMessages } from '../../utils/fetcher';
import Messages from '../Messages/Messages'

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headerExpanded: false,
    };
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
          <div className="chat__header__container">
            <div className="chat__header__info">
            <div className="chat__header__title">
              #{this.props.currentChannel.name}
            </div>
            <p
              onClick={this.expandHeaderTopic.bind(this)}
              className="chat__header__topic"
            >
              {topicDisplay}
            </p>
            </div>
            <div className="chat__header__logo">
              <img
                className="chat__header__logo--size"
                src="https://static1.squarespace.com/static/ta/522a22cbe4b04681b0bff826/3242/assets/images/logo/HR_at_Galvanize_Stacked.png"
                alt="Hack Reactor logo"
              />
          </div>
          </div>
        </div>
        <div className="messages">
          <Messages currentChannel={this.props.currentChannel} />
        </div>
      </div>
    );
  }
}
export default Chat;
