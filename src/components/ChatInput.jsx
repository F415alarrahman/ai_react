import PropTypes from 'prop-types';
import React from 'react';
import InputText from './InputText';
import InputButton from './InputBotton';

const ChatInput = ({ promptInputValue, setPromptInputValue, chatResponses, setChatResponses, action }) => {
  return (
    <div className="p-5 flex gap-5 items-center">
      <InputText
        promptInputValue={promptInputValue}
        setPromptInputValue={setPromptInputValue}
        chatResponses={chatResponses}
        setChatResponses={setChatResponses}
        action={action}
      />
      <InputButton
        promptInputValue={promptInputValue}
        setPromptInputValue={setPromptInputValue}
        chatResponses={chatResponses}
        setChatResponses={setChatResponses}
        action={action}
      />
    </div>
  );
};

ChatInput.propTypes = {
  promptInputValue: PropTypes.string.isRequired,
  setPromptInputValue: PropTypes.func.isRequired,
  chatResponses: PropTypes.array.isRequired,
  setChatResponses: PropTypes.func.isRequired,
  action: PropTypes.func.isRequired
};

export default ChatInput;
