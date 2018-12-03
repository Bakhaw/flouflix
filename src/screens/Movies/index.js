import React, { lazy, Suspense, useEffect, useState } from 'react';
import axios from 'axios';
import requests from '../../api/requests';

const Cards = lazy(() => import('../../components/Cards'));
import LayoutContainer from '../../components/LayoutContainer';
import Spinner from '../../components/Spinner';

function Movies() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);

  async function getItems() {
    const request = await axios.get(
      `${requests.GET.popular_movies}&page=${page}`
    );
    const response = await request.data.results;
    const allItems = items.concat(response);
    await setItems(allItems);
  }

  async function fetchMore() {
    await setPage(page + 1);
  }

  useEffect(
    () => {
      getItems();
    },
    [page]
  );

  return (
    <LayoutContainer>
      <div className='Movies__container'>
        <Suspense fallback={<Spinner />}>
          <Cards items={items} />
          <button className='Movies__fetchmore__button' onClick={fetchMore}>
            Fetch more ...
          </button>
        </Suspense>
      </div>
    </LayoutContainer>
  );
}

export default Movies;
