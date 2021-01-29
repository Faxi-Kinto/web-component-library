import React, { useState, useEffect, useRef, useCallback } from 'react';
import * as Styled from './Modal.styles';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

export type ModalProps = {
  header?: React.ReactNode;
  body?: React.ReactNode;
  footer?: React.ReactNode;
  toggled: boolean;
  className?: string;
  contentClassName?: string;
  parent?: HTMLElement;
  onClickOutOfModal?: () => void;
  headerClassName?: string;
  bodyClassName?: string;
  footerClassName?: string;
  position?: 'top' | 'center' | 'bottom';
  isBanner?: boolean;
  id?: string;
};

const Modal: React.FC<ModalProps> = (props: ModalProps): JSX.Element => {
  const {
    header,
    body,
    footer,
    toggled,
    className,
    contentClassName,
    parent,
    headerClassName,
    bodyClassName,
    footerClassName,
    onClickOutOfModal,
    position = 'center',
    isBanner = false,
    id,
  } = props;
  const myRef = useRef<HTMLDivElement>(null);

  const [isShown, setIsShown] = useState(toggled);

  const handleClickOutside = useCallback(
    (e: MouseEvent): void => {
      if (!isShown) return;
      if (!myRef.current?.contains(e.target as Node)) {
        onClickOutOfModal && onClickOutOfModal();
      }
    },
    [isShown, onClickOutOfModal]
  );

  useEffect(() => {
    setIsShown(toggled);
    if (isShown && !isBanner) {
      document.body.style.overflow = 'hidden';
    }
    if (!isBanner) {
      document.addEventListener('mousedown', handleClickOutside);
      return (): void => {
        document.removeEventListener('mousedown', handleClickOutside);
        document.body.style.overflow = '';
      };
    }
  }, [toggled, isShown, onClickOutOfModal, isBanner, handleClickOutside]);

  return isShown ? (
    ReactDOM.createPortal(
      <Styled.ModalStyles
        id={id}
        className={classNames([
          'wcl-modal',
          { 'wcl-modal--banner': isBanner },
          { 'wcl-modal--top': position === 'top' },
          { 'wcl-modal--center': position === 'center' },
          { 'wcl-modal--bottom': position === 'bottom' },
          className,
        ])}
      >
        <div
          className={classNames(['wcl-modal__content', contentClassName])}
          ref={myRef}
        >
          {header && <div className={headerClassName}>{header}</div>}
          {body && <div className={bodyClassName}>{body}</div>}
          {footer && <div className={footerClassName}>{footer}</div>}
        </div>
      </Styled.ModalStyles>,
      parent ? parent : document.body
    )
  ) : (
    <></>
  );
};

export default Modal;
