import React from 'react';

const ChatItem = ({ message, isUser }) => {
  return (
    <div className={`p-5 rounded-xl w-fit ${isUser ? 'bg-blue-200' : 'bg-gray-200'}`}>
      <p>{message}</p>
    </div>
  );
};

export default ChatItem;
