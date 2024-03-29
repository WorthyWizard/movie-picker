import JustWatchLogo from "@/assets/justwatch-logo.png";
import TMDBLogo from "@/assets/tmdb-logo.svg";
import { WatchProvidersWithoutId } from "@/types/movie/data";
import { getWatchProvidersByCountry } from "@/utils/transform/movieData";

import { Image } from "../Image";
import { Button } from "../UI";

import { ProvidingType } from "./ProvidingType";

import s from "./styles.module.css";

interface Props {
  providers: WatchProvidersWithoutId;
}

export const WatchProviders = (props: Props) => {
  const { providers } = props;

  const providersData = getWatchProvidersByCountry(providers);

  if (!providersData) return <></>;

  return (
    <div className={s.WatchProviders}>
      <h2 className={`main-heading`}>Watch</h2>
      <div className={s.InfoBlock}>
        <p className={s.InfoText}>
          We provide the information about watching providers through TMDB and
          JustWatch
        </p>
        <div className={s.InfoLogos}>
          <div className={s.Logo}>
            <Image path={TMDBLogo} alt="The Movie Database Logo" />
          </div>
          <div className={s.Logo}>
            <Image path={JustWatchLogo} alt="JustWatch Logo" />
          </div>
        </div>
        {providersData.rent && providersData.rent.length > 0 ? (
          <ProvidingType title="Rent" watchOptions={providersData.rent} />
        ) : (
          ""
        )}
        {providersData.buy && providersData.buy.length > 0 ? (
          <ProvidingType title="Buy" watchOptions={providersData.buy} />
        ) : (
          ""
        )}
        {providersData.flatrate && providersData.flatrate.length > 0 ? (
          <ProvidingType title="Stream" watchOptions={providersData.flatrate} />
        ) : (
          ""
        )}
        {providersData.flatrate_and_buy &&
        providersData.flatrate_and_buy.length > 0 ? (
          <ProvidingType
            title="Stream and buy"
            watchOptions={providersData.flatrate_and_buy}
          />
        ) : (
          ""
        )}
        <div className={s.ButtonWrapper}>
          <Button
            href={providersData.link}
            variant="contained"
            target="_blank"
            sx={{ mt: 8 }}
          >
            Pick Provider
          </Button>
        </div>
      </div>
    </div>
  );
};
