import React, { Fragment } from "react";
import Messages from "../Messages/Messages";
import Search from "../Search/Search"

const Chat = ({ channel }) => {
  return (
    <Fragment>
      <div>
        <Search />
      </div>
      <div>
        <Messages channel={channel} />
      </div>
    </Fragment>
  );
};

export default Chat;
