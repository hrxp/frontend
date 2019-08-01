import React from "react";
import { fetchChannelMessages } from "../../utils/fetcher";

const Messages = ({ currentChannel }) => {
  let testMessages = ["hi", "hello"];
  // let messages = fetchChannelMessages();    // TODO: Wired up api fetcher to update data

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
