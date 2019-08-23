import React from 'react';
// Todo: Need users API endpoint to render: user's displayName correctly(currently only have id), profilePhoto
// Note: do we want to display realName? or at least store it? Also, might have to refactor component to a class to handle user obj data states

const Message = ({ message }) => {
  return (
    <div>
      <div>Time: {message.ts}</div>
      <div>User: {message.user}</div>
      <div>Msg: {message.text}</div>
      <div>-------------------</div>
    </div>
  );
};

export default Message;
