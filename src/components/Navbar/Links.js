import React from 'react';
import { Link } from 'react-router-dom';

const links = [
  {
    routeTo: '/',
    text: 'Accueil'
  },
  {
    routeTo: '/series',
    text: 'Séries'
  },
  {
    routeTo: '/films',
    text: 'Films'
  },
  {
    routeTo: '/ajouts',
    text: 'Ajouts récents'
  },
  {
    routeTo: '/liste',
    text: 'Ma liste'
  }
];

function Links() {
  return (
    <ul className='Navbar__links__container'>
      {links.map((item, index) => (
        <li key={index}>
          <Link className='Navbar__link' to={item.routeTo}>
            {item.text}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Links;
