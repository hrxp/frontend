import React from "react";
import { fromUnixTime, format } from "date-fns";
// Note: do we want to display realName? or at least store it? Also, might have to refactor component to a class to handle user obj data states

const Message = ({ message }) => {
  const { displayName, profilePhoto } = message.createdBy || {};
  const { ts, text } = message;
  return (
    <React.Fragment>
      <img
        src={profilePhoto}
        className="message__photo"
        alt="profile picture"
      />
      <div className="message__info">
        <div className="message__info__user">{displayName} </div>
        <div className="message__info__time">
          {/* TODO: localize timestamps into the user's timezone */}
          {format(fromUnixTime(ts), "MMMM d yyyy HH:mm:ss")}
        </div>
      </div>
      <div className="message__text">{text}</div>
    </React.Fragment>
  );
};

export default Message;
