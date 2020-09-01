import React, { useState, useEffect, useRef } from 'react';
import * as Styled from './Modal.styles';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

export type ModalProps = {
  header?: React.ReactNode;
  body?: React.ReactNode;
  footer?: React.ReactNode;
  toggled: boolean;
  className?: string;
  parent?: HTMLElement;
  onClickOutOfModal?: () => void;
  headerClassName?: string;
  bodyClassName?: string;
  footerClassName?: string;
  position?: 'center' | 'top-center' | 'bottom';
};

const Modal: React.FC<ModalProps> = (props: ModalProps): JSX.Element => {
  const {
    header,
    body,
    footer,
    toggled,
    className,
    parent,
    headerClassName,
    bodyClassName,
    footerClassName,
    onClickOutOfModal,
    position,
  } = props;
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
          <div
            className={classNames([
              'modal-wrapper__content',
              className,
              position,
            ])}
            ref={myRef}
          >
            <div className={headerClassName}>{header}</div>
            <div className={bodyClassName}>{body}</div>
            <div className={footerClassName}>{footer}</div>
          </div>
        </div>
      </Styled.Container>,
      parent ? parent : document.body
    )
  ) : (
    <></>
  );
};

export default Modal;
