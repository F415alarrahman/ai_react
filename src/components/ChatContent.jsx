import PropTypes from 'prop-types';
import React from 'react';
import ChatItem from './ChatItem';

const ChatContent = ({ chatResponses }) => {
  return (
    <div className="flex flex-col overflow-y-scroll gap-5 w-full h-[640px] bg-white border p-5">
      {chatResponses?.map((chatResponse, index) => (
        <div key={index} className={`w-full flex ${chatResponse.type === 'user' ? 'justify-end' : 'justify-start'}`}>
          <ChatItem message={chatResponse.message} isUser={chatResponse.type === 'user'} />
        </div>
      ))}
    </div>
  );
};

ChatContent.propTypes = {
  chatResponses: PropTypes.arrayOf(
    PropTypes.shape({
      message: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ChatContent;
