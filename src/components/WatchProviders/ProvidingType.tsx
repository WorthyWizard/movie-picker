import { FC } from "react";
import { ProviderWatchOption } from "@/types/movie/rawTypes";
import Image from "../Image/Image";
import styles from "./WatchProviders.module.css";

interface ProvidingType {
  title: string;
  watchOptions: ProviderWatchOption[];
}

const ProvidingType: FC<ProvidingType> = (props) => {
  const { watchOptions, title } = props;

  const images: JSX.Element[] = watchOptions.map((option, i) => {
    return (
      <Image
        key={i}
        type="logo"
        path={option.logo_path}
        alt={option.provider_name}
        title={option.provider_name}
      />
    );
  });

  return (
    <div className={styles.ProvidingTypeWrapper}>
      <h3 className={styles.ProvidingTitle}>{title}</h3>
      <div className={styles.LogosWrapper}>{images}</div>
    </div>
  );
};

export default ProvidingType;
