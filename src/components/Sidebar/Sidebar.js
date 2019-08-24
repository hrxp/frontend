import React from "react";
import Channels from "../Channels/Channels";

const Sidebar = props => {
  return (
    <div className="sidebar">
      <h2 className="sidebar__header">HRX Portal</h2>
      <div className="sidebar__username">
        <span className="user-online">&middot;</span> {props.name}
      </div>
      <Channels
        currentChannel={props.currentChannel}
        changeChannel={props.changeChannel}
      />
    </div>
  );
};

export default Sidebar;
