import React from "react";
import Messages from "../Messages/Messages";

const Chat = ({ channel }) => {
  return (
    <div>
      <Messages channel={channel} />
    </div>
  );
};

export default Chat;
