import React from "react";
// Todo: Need users API endpoint to render: user's displayName correctly(currently only have id), profilePhoto
// Note: do we want to display realName? or at least store it? Also, might have to refactor component to a class to handle user obj data states

const Message = ({ message }) => {
  console.log('msg data', message)
  const { displayName, profilePhoto } = message.createdBy;
  const { ts, text } = message;
  return (
    <div>
      <div>Time: {ts}</div>
      <div>Photo: {profilePhoto}</div>
      <div>User: {displayName}</div>
      <div>Msg: {text}</div>
      <div>-------------------</div>
    </div>
  );
};

export default Message;
