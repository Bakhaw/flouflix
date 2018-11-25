import React from 'react';
import { Link } from 'react-router-dom';
import BrandLogo from '../../assets/images/flouflix_logo.png';

function Brand() {
  return (
    <Link to='/'>
      <img alt='Flouflix Logo' className='navbar__brand' src={BrandLogo} />
    </Link>
  );
}

export default Brand;
