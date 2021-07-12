import React from 'react';

import PersonIcon from '@material-ui/icons/Person';
import s from './Image.module.css';

const Image = ({ type }) => {

  let placeholder = '';

  switch(type) {
    case 'profile':
      placeholder = <PersonIcon />;
      break;
  }

  return (
    <div className={s.Placeholder}>
      {placeholder}
    </div>
  );

};

export default Image;