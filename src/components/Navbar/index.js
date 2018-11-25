import React from 'react';

import Brand from './Brand';
import KidsButton from './KidsButton';
import Links from './Links';
import NotificationsButton from './NotificationsButton';
import ProfileButton from './ProfileButton';
import SearchButton from './SearchButton';

function Navbar() {
  return (
    <div className='navbar'>
      <div className='navbar__left-items'>
        <Brand />
        <Links />
      </div>

      <div className='navbar__right-items'>
        <SearchButton />
        <KidsButton />
        <NotificationsButton />
        <ProfileButton />
      </div>
    </div>
  );
}

export default Navbar;
