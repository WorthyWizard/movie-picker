import s from "./styles.module.css";

interface Props {
  elements: JSX.Element[];
}

export const Grid = (props: Props) => {
  const { elements } = props;

  return (
    <div className={s.Grid}>
      <div className={s.GridInner}>{elements}</div>
    </div>
  );
};
