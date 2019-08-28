import React from "react";
// Todo: Need users API endpoint to render: user's displayName correctly(currently only have id), profilePhoto
// Note: do we want to display realName? or at least store it? Also, might have to refactor component to a class to handle user obj data states

const Message = ({ message }) => {
  const { displayName, profilePhoto } = message.createdBy;
  const { ts, text } = message;
  return (
    <React.Fragment>
      <img src={profilePhoto} 
         className="message__photo"
         alt="pfp"
      />
      <div className="message__info">
        <div className="message__info__user">{displayName} </div>
        <div className="message__info__time">{ts}</div>
      </div>
      <div className="message__text">Msg: {text}</div>
    </React.Fragment>
  );
};

export default Message;
