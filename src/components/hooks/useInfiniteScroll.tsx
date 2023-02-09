import { useEffect } from 'react';
import { FetchNextPageOptions, InfiniteQueryObserverResult } from '@tanstack/react-query';
import IInfinitePage from '../../lib/interfaces/IInfinitePage';

export default (
  fetchNextPage:
    (options?: FetchNextPageOptions | undefined) => Promise<InfiniteQueryObserverResult<IInfinitePage, Error>>,
  hasNextPage: boolean | undefined,
  isFetchingNextPage: boolean
  ) => {
    useEffect(() => {
      let fetching = false;
      const handleScroll = async () => {
        if (!fetching && window.innerHeight + window.scrollY >= document.body.offsetHeight) {
          fetching = true;
          if (hasNextPage && !isFetchingNextPage) await fetchNextPage();
          fetching = false;
        }
      }
      document.addEventListener('scroll', handleScroll)
      return () => {
        document.removeEventListener('scroll', handleScroll)
      }
    }, [fetchNextPage, hasNextPage, isFetchingNextPage]);
}
