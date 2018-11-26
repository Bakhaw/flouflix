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
    console.log('get items page:', page);
    const request = await axios.get(`${requests.GET.popular_movies}&page=${page}`);
    const response = await request.data.results;
    const allItems = items.concat(response);
    await setItems(allItems);
  }

  async function fetchMore() {
    // http://stackoverflow.com/questions/9439725/javascript-how-to-detect-if-browser-window-is-scrolled-to-bottom
    const scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
    const scrollHeight = (document.documentElement && document.documentElement.scrollHeight) || document.body.scrollHeight;
    const clientHeight = document.documentElement.clientHeight || window.innerHeight;
    const isScrolledToBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;

    if (isScrolledToBottom && page < 1000) {
      // if page is scrolled to bottom and total movies pages visited are less than 1000, fetch more data
      await setPage(page + 1);
    }
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
