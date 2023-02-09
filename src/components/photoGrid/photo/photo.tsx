import React from 'react';
import IPhotoProps from '../../../lib/interfaces/IPhotoProps';
import './styles.css';

const Photo = ({ photoURL, setModalSrc, toggle }: IPhotoProps) => {
  const showModalImg = () => {
    setModalSrc(photoURL);
    toggle();
  }

  return (
    <img
      className="gridContent"
      onClick={showModalImg}
      alt="grid-item"
      src={photoURL}
    />
  );
};

export default Photo;
