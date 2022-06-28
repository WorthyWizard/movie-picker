import { FC } from "react";
import s from "./Message.module.css";

interface MessageProps {
  text: string;
}

const Message: FC<MessageProps> = (props) => {
  const { text } = props;
  return (
    <div className={s.Message}>
      <p>{text}</p>
    </div>
  );
};

export default Message;
