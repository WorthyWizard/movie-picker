import React from 'react';

import { ImagesEndpoints } from '../../common/utils';
 
import s from './Person.module.css';

const Person = ({ data }) => {

  const {  
    profile_path, 
    name,
    character 
  } = data;

  return (
    <article className={s.Person}>
      <div className={s.PersonInner}>
        <div className={s.PersonImage}>
          <img src={ImagesEndpoints.profile() + (profile_path ? profile_path : '')} alt={name} />
        </div>
        <h3 className={s.PersonName}>{name}</h3>
        <p className={s.PersonSubtitle}>{character}</p>
      </div>
    </article>
  );
};

export default Person;