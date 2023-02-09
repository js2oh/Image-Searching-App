import React, { memo } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import Photo from './photo/photo';
import Modal from '../modal/modal';
import { useModal } from '../hooks/useModal';
import useInfiniteScroll from '../hooks/useInfiniteScroll';
import createSearchAPI from '../../api/createSearchAPI';
import IInfinitePage from '../../lib/interfaces/IInfinitePage';
import IPhotoGridProps from '../../lib/interfaces/IPhotoGridProps';
import "./styles.css";

const PhotoGrid = memo(({ searchQuery } : IPhotoGridProps) => {
  const { isShown, toggle, modalSrc, setModalSrc } = useModal();

  const fetchPhotoData = createSearchAPI(searchQuery);

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    isSuccess,
    status,
  } = useInfiniteQuery<IInfinitePage, Error>(
    ['images', searchQuery],
    fetchPhotoData,
    {
      getNextPageParam: (lastPage) => lastPage.nextCursor,
    },
  );

  useInfiniteScroll(fetchNextPage, hasNextPage, isFetchingNextPage);

  const searchResults = data && data.pages ? data.pages.reduce(
    (acc: JSX.Element[], page) => acc.concat(page.photoData.map(
      (photo: Record<string,any>) => <Photo
        key={photo.id}
        photoURL={photo.webformatURL}
        setModalSrc={setModalSrc}
        toggle={toggle}
      />
    )), []) : [];

  const modelContent = <img src={modalSrc} alt="modal" className="modalImage"/>;

  return (
    <>
      <div className="gridContainer">
        {isSuccess && searchResults}
      </div>
      <Modal
        isShown={isShown}
        hide={toggle}
        modalContent={modelContent}
      />
    </>
  );
});

export default PhotoGrid;
