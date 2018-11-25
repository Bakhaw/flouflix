import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import requests from '../../api/requests';

import { createFetcher, Placeholder } from '../../future';
import Spinner from '../Spinner';

function Card() {
  const [items, setItems] = useState([]);

  async function getItems() {
    const request = await axios.get(requests.GET.popular_movies);
    const response = await request.data;
    await setItems(response);
  }

  useEffect(() => {
    if (items.length === 0) {
      getItems();
    }
  });

  console.log('Done', items);

  return (
    <Fragment>
      <Placeholder delayMs={2000} fallback={<Spinner />}>
        lol
      </Placeholder>
    </Fragment>
  );
}

export default Card;
