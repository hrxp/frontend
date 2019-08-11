import React from 'react';
import { fetchChannelMessages } from '../../utils/fetcher';

const Chat = ({ channel }) => {
  let testMessages = ['Message1', 'Message2'];
  // let messages = fetchChannelMessages(); // TODO: API server needs to add messages in data model

  return (
    <div className="chat">
      <div className="chat__header">
        <h1>#{channel}</h1>
      </div>
      <div className="messages">
        {
          testMessages.map(message => {
            return <div>{message}</div>;
          })
        }
      </div>
    </div>
  );
};

export default Chat;
