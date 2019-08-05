import React from 'react';
import { fetchChannelMessages } from '../../utils/fetcher';

const Messages = ({ currentChannel }) => {
  let testMessages = ['Message1', 'Message2'];
  // let messages = fetchChannelMessages(); // TODO: API server needs to add messages in data model

  return (
    <div>
      <h1>{currentChannel}</h1>
      {testMessages.map(message => {
        return <div>{message}</div>;
      })}
    </div>
  );
};

export default Messages;
