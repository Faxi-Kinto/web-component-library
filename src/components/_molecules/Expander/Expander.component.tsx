/* eslint-disable react/no-find-dom-node */
import React, {
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import * as Styled from './Expander.styles';
import classNames from 'classnames';
import { CSSTransition } from 'react-transition-group';
import uniqid from 'uniqid';
import debounce from 'lodash.debounce';

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
  const id = useRef(uniqid());
  const mainRef = useRef<HTMLDetailsElement>();
  const first = useRef<number>();
  const last = useRef<{
    lower: number;
    upper: number;
  }>({ lower: 0, upper: 0 });

  const [open, setOpen] = useState(propOpen);

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

  const calculateLast = useCallback(() => {
    const element = mainRef.current;
    if (!element) return;

    const newOpen = !open;

    element.style.transition = 'none';
    last.current[
      newOpen ? 'lower' : 'upper'
    ] = element.getBoundingClientRect().height;
    element[newOpen ? 'setAttribute' : 'removeAttribute']('open', '');
    last.current[
      newOpen ? 'upper' : 'lower'
    ] = element.getBoundingClientRect().height;
    element[newOpen ? 'removeAttribute' : 'setAttribute']('open', '');
    element.style.transition = '';
    setOpen(old => old);
  }, [open]);

  useEffect(() => {
    const debouncedCalculateLast = debounce(calculateLast, 150);

    window.addEventListener('resize', debouncedCalculateLast);

    return () => {
      window.removeEventListener('resize', debouncedCalculateLast);
    };
  }, [calculateLast]);

  const toggle = useCallback((ev: React.MouseEvent) => {
    ev.preventDefault();
    setOpen(old => {
      const newOpen = !old;

      const element = mainRef.current;
      if (!element) return old;

      first.current = element?.getBoundingClientRect().height;
      element[newOpen ? 'setAttribute' : 'removeAttribute']('open', '');

      return newOpen;
    });
  }, []);

  return (
    <>
      <CSSTransition
        timeout={300}
        in={open}
        classNames="expander"
        // must show the content in order to animate it
        onExiting={() => mainRef.current?.setAttribute('open', '')}
        onExited={() => mainRef.current?.removeAttribute('open')}
      >
        <Styled.Container
          className={id.current}
          ref={container => {
            if (!mainRef.current && container) {
              mainRef.current = container as HTMLDetailsElement;
              calculateLast();
            }
          }}
        >
          <style>{`
          details.${id.current} { 
            --first:${first.current}px; 
            --last: ${open ? last.current.upper : last.current.lower}px; 
            }`}</style>
          <summary onClick={toggle}>
            {title}
            {icon}
          </summary>
          <p>{body}</p>
        </Styled.Container>
      </CSSTransition>
    </>
  );
};

export default Expander;
