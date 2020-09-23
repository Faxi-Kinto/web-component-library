/* eslint-disable react/no-find-dom-node */
import React, {
  ReactNode,
  useCallback,
  useMemo,
  useRef,
  useState,
} from 'react';
import * as Styled from './Expander.styles';
import classNames from 'classnames';
import { CSSTransition } from 'react-transition-group';

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
    last.current.lower = element.getBoundingClientRect().height;
    element[newOpen ? 'setAttribute' : 'removeAttribute']('open', '');
    last.current.upper = element.getBoundingClientRect().height;
    element[newOpen ? 'removeAttribute' : 'setAttribute']('open', '');
    element.style.transition = '';
    setOpen(old => old);
  }, [open]);

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
          ref={container => {
            if (!mainRef.current && container) {
              mainRef.current = container as HTMLDetailsElement;
              calculateLast();
            }
          }}
        >
          <style>{`
          details { 
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
