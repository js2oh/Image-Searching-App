import React, { memo } from 'react';
import { createPortal } from 'react-dom';
import IModalProps from '../../lib/interfaces/IModalProps';
import "./styles.css";

const Modal = memo(({ isShown, hide, modalContent }: IModalProps) => {
  const modalFrame = (
    <div className="modalContainer">
      <div className="modalContent">
        <span className="closeButton" onClick={hide}>
          &times;
        </span>
        {modalContent}
      </div>
    </div>
  );

  return isShown ? createPortal(modalFrame, document.body) : null;
});

export default Modal;
