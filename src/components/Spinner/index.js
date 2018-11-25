import React from 'react';
import LayoutContainer from '../LayoutContainer';
import CircularProgress from '@material-ui/core/CircularProgress';

function Spinner() {
  return (
    <LayoutContainer>
      <div className='spinner__container'>
        <CircularProgress className='spinner' />
      </div>
    </LayoutContainer>
  );
}

export default Spinner;
