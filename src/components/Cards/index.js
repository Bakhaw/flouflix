import React from 'react';
import keys from '../../api/keys';

function Cards({ items }) {
  return (
    <div className='Cards__container'>
      {items.map((item, index) => (
        <div className='Card' key={index}>
          <img alt={`${item.title} poster`} className='Card__poster' src={`${keys.BASE_API_IMAGE_URL}/${item.poster_path}`} />
        </div>
      ))}
    </div>
  );
}

export default Cards;
