import React from 'react';

import Image from '../../components/Image/Image';
 
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
          <Image path={profile_path} alt={name} type='profile' />
        </div>
        <h3 className={s.PersonName}>{name}</h3>
        <p className={s.PersonSubtitle}>{character}</p>
      </div>
    </article>
  );
};

export default Person;