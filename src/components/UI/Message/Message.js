import React from 'react';

import s from './Message.module.css';

const Message = ({ text }) => {
  return (
    <div className={s.Message}>
      <p>{text}</p>
    </div>
  );
};

export default Message;