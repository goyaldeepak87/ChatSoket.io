import React, { useState } from 'react';
import EmojiPicker from 'emoji-picker-react';
// import './EmojiComp.css'; // Import the CSS file

export default function EmojiComp(props) {
  
  const onEmojiClick = (emojiData) => {
    props?.setInputText((prev) => prev + emojiData.emoji); // Append emoji to the existing input text
  };

  return (
    <div>
      <EmojiPicker  previewConfig={{ showPreview: false }} onEmojiClick={onEmojiClick} />
    </div>
  );
}
