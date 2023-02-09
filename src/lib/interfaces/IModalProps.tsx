import react from 'react';

export default interface IModalProps {
  isShown: boolean;
  hide: () => void;
  modalContent: JSX.Element;
}
