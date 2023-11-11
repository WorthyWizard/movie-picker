import styles from "./styles.module.css";

interface Props {
  title: string;
  value: string;
}

export const MovieDetail = (props: Props) => {
  const { title, value } = props;
  return (
    <div className={styles.Detail}>
      <div className={styles.DetailTitleWrapper}>
        <p className={styles.DetailTitle}>{title}</p>
        <div className={styles.DotDivider}></div>
      </div>
      <p className={styles.DetailValue}>{value}</p>
    </div>
  );
};
