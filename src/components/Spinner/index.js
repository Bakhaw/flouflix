import React from 'react';
import LayoutContainer from '../LayoutContainer';
import CircularProgress from '@material-ui/core/CircularProgress';

function Spinner() {
  return (
    <LayoutContainer>
      <div className='Spinner__container'>
        <CircularProgress className='Spinner__item' />
      </div>
    </LayoutContainer>
  );
}

export default Spinner;
