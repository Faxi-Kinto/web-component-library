/* eslint-disable react/no-find-dom-node */
import React, { ReactNode, useEffect, useMemo, useRef, useState } from 'react';
import * as Styled from './Expander.styles';
import classNames from 'classnames';

export type ExpanderProps = {
  title: string;
  body: ReactNode;
  open?: boolean;
  icon?: JSX.Element;
  iconClassName?: string;
  headerClassName?: string;
};

const Expander: React.FC<ExpanderProps> = (
  props: ExpanderProps
): JSX.Element => {
  const {
    title,
    body,
    icon: propIcon,
    open: propOpen = false,
    iconClassName,
  } = props;
  const mainRef = useRef<HTMLDivElement>(null);
  const isFirstRun = useRef(true);

  const [open, setOpen] = useState(propOpen);

  const transitionListenerRef = useRef<() => void>();

  useEffect(() => {
    const element = mainRef.current;

    if (!element) return;

    if (isFirstRun.current) {
      /** if `propOpen` is set to true, we handle that without animation */
      isFirstRun.current = false;
      element[open ? 'setAttribute' : 'removeAttribute']('open', '');
      return;
    }
    const first = element.getBoundingClientRect();

    element[open ? 'setAttribute' : 'removeAttribute']('open', '');

    const last = element.getBoundingClientRect();

    element[open ? 'removeAttribute' : 'setAttribute']('open', '');

    element.style.height = `${first.height}px`;
    requestAnimationFrame(() => {
      if (open) element.setAttribute('open', '');

      element.classList.add('animate-on-height');
      element.style.height = `${last.height}px`;
    });

    if (transitionListenerRef.current) {
      element.removeEventListener(
        'transitionend',
        transitionListenerRef.current
      );
    }

    transitionListenerRef.current = () => {
      if (!open) element.removeAttribute('open');

      element.removeAttribute('style');
      element.classList.remove('animate-on-height');
      element.removeEventListener(
        'transitionend',
        transitionListenerRef.current!
      );
    };

    element.addEventListener('transitionend', transitionListenerRef.current);
  }, [open]);

  const icon = useMemo(() => {
    if (!propIcon) return null;
    return (
      <span className={`expander__icon${open ? ' expander__icon--open' : ''}`}>
        {React.cloneElement(propIcon, {
          className: classNames([iconClassName]),
        })}
      </span>
    );
  }, [open, propIcon, iconClassName]);

  return (
    <Styled.Container ref={mainRef}>
      <summary
        onClick={ev => {
          ev.preventDefault();
          setOpen(old => !old);
        }}
      >
        {title}
        {icon}
      </summary>
      <p>{body}</p>
    </Styled.Container>
  );
};

export default Expander;
