import React from 'react';

import { 
  getFilteredWatchProviders
} from '../../common/utils';
import Image from '../../components/Image/Image';
import s from './WatchProviders.module.css';
import Button from '../../components/UI/Button/Button';
import TMDBLogo from '../../assets/tmdb-logo.svg';
import JustWatchLogo from '../../assets/justwatch-logo.png';

const ProvidingType = ({ title, data }) => {

  const images = data.map(provider => <Image key={provider.provider_id} path={provider.logo_path} type='logo' alt={provider.provider_name}/>)

  return (
    <div className={s.ProvidingTypeWrapper}>
      <h3 className={s.ProvidingTitle}>{title}</h3>
      <div className={s.LogosWrapper}>
        {images}
      </div>
    </div>
  );
}

const WatchProviders = ({ data }) => {

  const providersData = getFilteredWatchProviders(data);

  return (
    <div className={s.WatchProviders}>
      <h2 className={`main-heading`}>Watch</h2>
      <div className={s.InfoBlock}>
        <p className={s.InfoText}>We provide the information about watching providers through TMDB and JustWatch</p>
        <div className={s.InfoLogos}>
          <div className={s.Logo}>
            <Image path={TMDBLogo} alt='The Movie Database Logo'/>
          </div>
          <div className={s.Logo}>
            <Image path={JustWatchLogo} alt='JustWatch Logo'/>
          </div>
        </div>
        { providersData.rent.length > 0 ? <ProvidingType title='Rent' data={providersData.rent} /> : ''}
        { providersData.buy.length > 0 ? <ProvidingType title='Buy' data={providersData.buy} /> : ''}
        { providersData.flatrate.length > 0 ? <ProvidingType title='Flatrate' data={providersData.flatrate} /> : ''}
        <div className={s.ButtonWrapper}>
          <Button link={providersData.link} type='text' title='Pick Provider' className={s.PickBtn} />
        </div>
      </div>
    </div>
  );
};



export default WatchProviders;