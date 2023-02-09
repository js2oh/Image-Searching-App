import axios from 'axios';
import { QueryFunctionContext } from '@tanstack/react-query';
import { LIMIT } from '../constants/SearchParams';

export default (searchQuery: string) => async ({pageParam = 1}: QueryFunctionContext) => {
  const url = `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_KEY}&q=${searchQuery}&image_type=photo&page=${pageParam}&per_page=${LIMIT}`;
  const { data } = await axios.get(url);
  const maxPage = Math.ceil(data.totalHits/LIMIT);
  const nextCursor = pageParam < maxPage ? pageParam + 1 : undefined;
  return { nextCursor, photoData: data.hits };
};
