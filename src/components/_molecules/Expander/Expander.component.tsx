/* eslint-disable react/no-find-dom-node */
import React, {
  forwardRef,
  ReactNode,
  useCallback,
  useEffect,
  useImperativeHandle,
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
  bodyAs?: 'p' | 'div';
  contentId?: string;
  className?: string;
  headerClassName?: string;
  icon?: JSX.Element;
  iconClassName?: string;
  open?: boolean;
  title: string;
};

export type ExpanderRef = {
  toggle: () => void;
};

const Expander: React.ForwardRefRenderFunction<ExpanderRef, ExpanderProps> = (
  props,
  ref
): JSX.Element => {
  const {
    animate = true,
    body,
    contentId,
    icon: propIcon,
    className,
    iconClassName,
    open: propOpen = false,
    title,
    bodyAs = 'p',
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

  const toggle = useCallback((ev?: React.MouseEvent) => {
    ev?.preventDefault();
    setOpen(old => {
      const newOpen = !old;

      const element = mainRef.current;
      if (!element) return old;

      first.current = element?.getBoundingClientRect().height;
      element[newOpen ? 'setAttribute' : 'removeAttribute']('open', '');

      return newOpen;
    });
  }, []);

  const bodyRenderAs = useMemo(() => {
    return React.createElement(bodyAs, {}, body);
  }, [body, bodyAs]);

  useImperativeHandle(
    ref,
    () => ({
      open,
      toggle,
    }),
    [open, toggle]
  );

  useEffect(() => {
    requestAnimationFrame(() => calculateLast(!initialOpenRef.current));
  }, [calculateLast]);

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
            className,
          ])}
          ref={container => (mainRef.current = container as HTMLDetailsElement)}
        >
          <style>{`
          details.${id.current} { 
            --first:${first.current}px; 
            --last: ${!open ? last.current.lower : last.current.upper}px; 
            }`}</style>
          <summary onClick={toggle}>
            <div className="expander__content" id={contentId}>
              {title}
              {icon}
            </div>
          </summary>
          {bodyRenderAs}
        </Styled.Container>
      </CSSTransition>
    </>
  );
};

export default forwardRef(Expander);
