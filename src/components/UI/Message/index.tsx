import s from "./styles.module.css";

interface Props {
  text: string;
}

export const Message = (props: Props) => {
  const { text } = props;
  return (
    <div className={s.Message}>
      <p>{text}</p>
    </div>
  );
};
