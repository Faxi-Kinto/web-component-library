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
  animate?: boolean;
  body: ReactNode;
  headerClassName?: string;
  icon?: JSX.Element;
  iconClassName?: string;
  open?: boolean;
  title: string;
};

const Expander: React.FC<ExpanderProps> = (
  props: ExpanderProps
): JSX.Element => {
  const {
    animate = true,
    body,
    icon: propIcon,
    iconClassName,
    open: propOpen = false,
    title,
  } = props;

  const id = useRef(uniqid());
  const mainRef = useRef<HTMLDetailsElement>();
  const initialOpenRef = useRef(propOpen);
  const first = useRef<number>();
  const last = useRef<{ lower: number; upper: number }>({
    lower: 0,
    upper: 0,
  });

  const [open, setOpen] = useState(propOpen);

  const calculateLast = useCallback((newOpen: boolean) => {
    const element = mainRef.current;
    if (!element) return;

    last.current[
      newOpen ? 'lower' : 'upper'
    ] = element.getBoundingClientRect().height;
    element[newOpen ? 'setAttribute' : 'removeAttribute']('open', '');
    last.current[
      newOpen ? 'upper' : 'lower'
    ] = element.getBoundingClientRect().height;
    element[newOpen ? 'removeAttribute' : 'setAttribute']('open', '');
  }, []);

  useEffect(() => {
    requestAnimationFrame(() => calculateLast(!initialOpenRef.current));
  }, [calculateLast]);

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

  useEffect(() => {
    const debouncedCalculateLast = debounce(
      () => calculateLast(mainRef.current?.getAttribute('open') === null),
      150
    );

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
        in={animate && open}
        classNames="expander"
        // must show the content in order to animate it
        onExiting={() => mainRef.current?.setAttribute('open', '')}
        onExited={() => mainRef.current?.removeAttribute('open')}
      >
        <Styled.Container
          className={classNames([
            id.current,
            { 'expander--instant': !animate },
          ])}
          ref={container => (mainRef.current = container as HTMLDetailsElement)}
        >
          <style>{`
          details.${id.current} { 
            --first:${first.current}px; 
            --last: ${!open ? last.current.lower : last.current.upper}px; 
            }`}</style>
          <summary onClick={toggle}>
            <div className="expander__content">
              {title}
              {icon}
            </div>
          </summary>
          <p>{body}</p>
        </Styled.Container>
      </CSSTransition>
    </>
  );
};

export default Expander;
