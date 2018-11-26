import keys from './keys';

const requests = {
  GET: {
    popular_movies: `${keys.BASE_API_URL}/movie/popular?api_key=${keys.SECRET_KEY}&language=fr-FR`
  }
};

export default requests;
