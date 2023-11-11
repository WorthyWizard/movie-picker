import { ProviderWatchOption } from "@/types/movie/data";

import { Image } from "../Image";

import styles from "./styles.module.css";

interface Props {
  title: string;
  watchOptions: ProviderWatchOption[];
}

export const ProvidingType = (props: Props) => {
  const { watchOptions, title } = props;

  const images: JSX.Element[] = watchOptions.map((option) => {
    return (
      <Image
        key={option.provider_id}
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
