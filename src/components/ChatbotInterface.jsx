import PropTypes from 'prop-types';
import React from 'react';
import ChatHeader from './ChatHeader';
import ChatContent from './ChatContent';
import ChatInput from './ChatInput';

const ChatbotInterface = ({ 
  promptInputValue, 
  setPromptInputValue, 
  chatResponses, 
  setChatResponses,
  action
}) => {
  return (
    <div className="bg-white w-full max-w-[560px] h-full flex flex-col">
      <ChatHeader />
      <ChatContent chatResponses={chatResponses} />
      <ChatInput
        promptInputValue={promptInputValue}
        setPromptInputValue={setPromptInputValue}
        chatResponses={chatResponses}
        setChatResponses={setChatResponses}
        action={action}
      />
    </div>
  );
};

ChatbotInterface.propTypes = {
  promptInputValue: PropTypes.string.isRequired,
  setPromptInputValue: PropTypes.func.isRequired,
  chatResponses: PropTypes.array.isRequired,
  setChatResponses: PropTypes.func.isRequired,
  action: PropTypes.func.isRequired
};

export default ChatbotInterface;
