import PropTypes from 'prop-types';
import { SendHorizontal } from 'lucide-react';
import React from 'react';

const InputButton = ({ promptInputValue, setPromptInputValue, chatResponses, setChatResponses, action }) => {
  const handleClick = () => {
    if (promptInputValue.trim()) {
      setChatResponses([...chatResponses, { type: 'user', message: promptInputValue }]);
      action(); // Trigger AI response
    }
  };

  return (
    <div 
      className="bg-blue-700 p-3 rounded-lg hover:cursor-pointer active:scale-95 duration-300"
      onClick={handleClick}
    >
      <SendHorizontal color="white" />  
    </div>
  );
};

InputButton.propTypes = {
  promptInputValue: PropTypes.string.isRequired,
  setPromptInputValue: PropTypes.func.isRequired,
  chatResponses: PropTypes.array.isRequired,
  setChatResponses: PropTypes.func.isRequired,
  action: PropTypes.func.isRequired
};

export default InputButton;
