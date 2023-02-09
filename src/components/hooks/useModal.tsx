import { useState } from 'react';

export const useModal = () => {
  const [isShown, setIsShown] = useState<boolean>(false);
  const [modalSrc, setModalSrc] = useState<string>("");
  const toggle = () => setIsShown((prev) => !prev);
  return {
    isShown,
    toggle,
    modalSrc,
    setModalSrc,
  };
};
