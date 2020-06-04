import React, { useState, useEffect, useRef } from 'react';
import * as Styled from './Modal.styles';
import ReactDOM from 'react-dom';

export type ModalProps = {
  title?: string;
  body?: string;
  toggled: boolean;
  footer?: JSX.Element;
  onClickOutOfModal?: () => void;
};

const Modal: React.FC<ModalProps> = (props: ModalProps): JSX.Element => {
  const { title, toggled, onClickOutOfModal, body, footer } = props;
  const myRef = useRef<HTMLDivElement>(null);

  const [isShown, setIsShown] = useState(toggled);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent): void => {
      if (!isShown) return;
      if (!myRef.current?.contains(e.target as Node)) {
        onClickOutOfModal && onClickOutOfModal();
      }
    };
    setIsShown(toggled);
    if (isShown) {
      document.body.style.overflow = 'hidden';
    }
    document.addEventListener('mousedown', handleClickOutside);
    return (): void => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [toggled, isShown, onClickOutOfModal]);

  return isShown ? (
    ReactDOM.createPortal(
      <Styled.Container>
        <div className="modal-wrapper">
          <div className="modal-wrapper__content" ref={myRef}>
            <div className="modal-wrapper__content__header">{title}</div>
            <div className="modal-wrapper__content__body">{body}</div>
            <hr className="modal-wrapper__content__line" />
            <div className="modal-wrapper__content__footer">{footer}</div>
          </div>
        </div>
      </Styled.Container>,
      document.body
    )
  ) : (
    <></>
  );
};

export default Modal;
