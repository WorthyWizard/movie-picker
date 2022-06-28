import { FC } from "react";
import styles from "./MoviePage.module.css";

interface MovieDetailsProps {
  title: string;
  value: string;
}

const MovieDetail: FC<MovieDetailsProps> = ({ title, value }) => {
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

export default MovieDetail;
