import React from "react";
import { fetchChannelMessages } from "../../utils/fetcher";

export const Messages = ({ currentChannel }) => {
  let messages = fetchChannelMessages(currentChannel);

  return (
    <div>
      <h1>{currentChannel}</h1>
      <p>Lorem ipsum</p>
      <div>
        {messages.map(message => {
          return <li>{message}</li>;
        })}
      </div>
    </div>
  );
};
